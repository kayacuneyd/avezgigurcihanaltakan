// Small headless Puppeteer smoke-check for nav active classes and CTA hover
// Usage: node tests/ui-smoke.test.js
import { spawn } from 'child_process';
import puppeteer from 'puppeteer';

function startDevServer() {
	const proc = spawn('npm', ['run', 'dev'], { env: process.env, shell: true });

	let stdout = '';
	const onData = (d) => {
		stdout += d.toString();
	};

	proc.stdout.on('data', onData);
	proc.stderr.on('data', onData);

	return {
		proc,
		waitForUrl: (timeout = 20000) => new Promise((resolve, reject) => {
			const start = Date.now();
			const check = () => {
				const m = stdout.match(/(http:\/\/localhost:\d+\/)/);
				if (m) return resolve(m[1]);
				if (Date.now() - start > timeout) return reject(new Error('Dev server did not start in time'));
				setTimeout(check, 200);
			};
			check();
		})
	};
}

async function runTests(baseUrl) {
	const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
	const page = await browser.newPage();
	page.setDefaultTimeout(10000);

	// 1) Root page: Startseite link should be active
	await page.goto(baseUrl, { waitUntil: 'networkidle0' });
	await page.waitForSelector('header');
	const startLink = await page.$('a[href="/"]');
	if (!startLink) throw new Error('Startseite link not found');
	const startClasses = await page.evaluate((el) => el.className, startLink);
	if (!startClasses.includes('text-primary-600')) throw new Error('Startseite is not active on /');

	// 2) Blog index: blog link should be active on /blog
	await page.goto(new URL('/blog', baseUrl).toString(), { waitUntil: 'networkidle0' });
	await page.waitForSelector('a[href="/blog"]');
	const blogLink = await page.$('a[href="/blog"]');
	const blogClasses = await page.evaluate((el) => el.className, blogLink);
	if (!blogClasses.includes('text-primary-600')) throw new Error('Blog link not active on /blog');

	// 3) CTA hover: background color should change on hover for .btn-primary
	await page.goto(baseUrl, { waitUntil: 'networkidle0' });
	await page.waitForSelector('.btn-primary');
	const btnHandle = await page.$('.btn-primary');
	const before = await page.evaluate((el) => getComputedStyle(el).backgroundColor, btnHandle);
	await page.hover('.btn-primary');
	// small wait to allow hover styles to apply
	await page.waitForTimeout(200);
	const after = await page.evaluate((el) => getComputedStyle(el).backgroundColor, btnHandle);
	if (before === after) throw new Error('CTA hover did not change background color');

	// 4) Footer developer credit link exists and opens in new tab (target="_blank")
	await page.waitForSelector('footer');
	const devLink = await page.$('footer a[target="_blank"]');
	if (!devLink) throw new Error('Footer developer credit link not found');

	await browser.close();
}

async function main() {
	const server = startDevServer();
	let url;
	try {
		url = await server.waitForUrl();
		// ensure url ends with /
		if (!url.endsWith('/')) url += '/';
		console.log('Dev server URL:', url);
		await runTests(url);
		console.log('UI smoke-check: PASS');
		server.proc.kill();
		process.exit(0);
	} catch (err) {
		console.error('UI smoke-check: FAIL');
		console.error(err);
		try { server.proc.kill(); } catch (e) {}
		process.exit(1);
	}
}

// Run
main();
