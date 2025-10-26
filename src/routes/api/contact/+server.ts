import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';

const resend = new Resend(RESEND_API_KEY);

// Rate limiting (basit - IP bazlı)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
	const now = Date.now();
	const record = requestCounts.get(ip);

	if (!record || now > record.resetTime) {
		requestCounts.set(ip, { count: 1, resetTime: now + 15 * 60 * 1000 }); // 15 dakika
		return true;
	}

	if (record.count >= 5) {
		return false; // Limit aşıldı
	}

	record.count++;
	return true;
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	const ip = getClientAddress();

	// Rate limit kontrolü
	if (!checkRateLimit(ip)) {
		return json(
			{ error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
			{ status: 429 }
		);
	}

	try {
		const data = await request.json();
		const { name, email, phone, subject, message, dsgvo } = data;

		// Validation
		if (!name || !email || !message || !dsgvo) {
			return json(
				{ error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
				{ status: 400 }
			);
		}

		if (!email.includes('@')) {
			return json(
				{ error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
				{ status: 400 }
			);
		}

		if (message.length < 20) {
			return json(
				{ error: 'Ihre Nachricht muss mindestens 20 Zeichen lang sein.' },
				{ status: 400 }
			);
		}

		// Email gönder
		const emailResult = await resend.emails.send({
			from: 'Website Kontakt <onboarding@resend.dev>', // Resend test domain
			to: 'info@avezgigurcihanaltakan.com',
			replyTo: email,
			subject: `Neue Kontaktanfrage - ${subject || 'Allgemeine Anfrage'}`,
			html: `
				<h2>Neue Kontaktanfrage</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>E-Mail:</strong> ${email}</p>
				${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
				<p><strong>Betreff:</strong> ${subject || 'Allgemeine Anfrage'}</p>
				<hr />
				<p><strong>Nachricht:</strong></p>
				<p>${message.replace(/\n/g, '<br>')}</p>
				<hr />
				<p style="color: gray; font-size: 12px;">
					Gesendet: ${new Date().toLocaleString('de-DE')}<br>
					DSGVO Zustimmung: Ja ✓<br>
					IP: ${ip}
				</p>
			`
		});

		if (emailResult.error) {
			console.error('Resend error:', emailResult.error);
			return json(
				{
					error:
						'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.'
				},
				{ status: 500 }
			);
		}

		return json({ success: true });
	} catch (error) {
		console.error('Contact form error:', error);
		return json(
			{ error: 'Ein unerwarteter Fehler ist aufgetreten.' },
			{ status: 500 }
		);
	}
};
