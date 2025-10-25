// Minimal jsdom-based smoke-check for nav active classes and element presence
// Usage: node tests/ui-smoke-jsdom.test.js
import { spawn } from "child_process";
import { JSDOM } from "jsdom";
import fetch from "node-fetch";

function startDevServer() {
  const proc = spawn("npm", ["run", "dev"], { env: process.env, shell: true });
  let stdout = "";
  const onData = (d) => {
    stdout += d.toString();
  };
  proc.stdout.on("data", onData);
  proc.stderr.on("data", onData);
  return {
    proc,
    waitForUrl: (timeout = 20000) =>
      new Promise((resolve, reject) => {
        const start = Date.now();
        const check = () => {
          const m = stdout.match(/(http:\/\/localhost:\d+\/)/);
          if (m) return resolve(m[1]);
          if (Date.now() - start > timeout)
            return reject(new Error("Dev server did not start in time"));
          setTimeout(check, 200);
        };
        check();
      }),
  };
}

async function assertRootAndBlog(baseUrl) {
  // Fetch root
  const rootRes = await fetch(baseUrl);
  if (!rootRes.ok) throw new Error("Failed to fetch root: " + rootRes.status);
  const rootHtml = await rootRes.text();
  const domRoot = new JSDOM(rootHtml);
  const docRoot = domRoot.window.document;

  // Find the nav item that has the active class and ensure it corresponds to '/'
  const activeNav = Array.from(docRoot.querySelectorAll("header a")).find((a) =>
    (a.className || "").includes("text-primary-600")
  );
  if (!activeNav)
    throw new Error("No active nav item (text-primary-600) found on root HTML");
  if (activeNav.getAttribute("href") !== "/")
    throw new Error("Active nav item on root does not point to /");

  // CTA presence
  const cta = docRoot.querySelector(".btn-primary");
  if (!cta) throw new Error(".btn-primary not found on root page");

  // Footer developer credit
  const footerLink = docRoot.querySelector('footer a[target="_blank"]');
  if (!footerLink)
    throw new Error("Footer developer credit link not found in root HTML");

  // Fetch blog index
  const blogRes = await fetch(new URL("/blog", baseUrl).toString());
  if (!blogRes.ok) throw new Error("Failed to fetch /blog: " + blogRes.status);
  const blogHtml = await blogRes.text();
  const domBlog = new JSDOM(blogHtml);
  const docBlog = domBlog.window.document;
  const blogLink = docBlog.querySelector('a[href="/blog"]');
  if (!blogLink) throw new Error("Blog link not found in /blog HTML");
  const blogClasses = blogLink.className || "";
  if (!blogClasses.includes("text-primary-600"))
    throw new Error(
      "Blog link not active on /blog (missing text-primary-600 class)"
    );
}

async function main() {
  const server = startDevServer();
  try {
    let url = await server.waitForUrl();
    if (!url.endsWith("/")) url += "/";
    console.log("Dev server URL:", url);
    await assertRootAndBlog(url);
    console.log("JS-DOM UI smoke-check: PASS");
    server.proc.kill();
    process.exit(0);
  } catch (err) {
    console.error("JS-DOM UI smoke-check: FAIL");
    console.error(err);
    try {
      server.proc.kill();
    } catch (e) {}
    process.exit(1);
  }
}

main();
