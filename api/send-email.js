import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!RESEND_API_KEY) {
        return res.status(500).json({ error: 'Missing RESEND_API_KEY environment variable' });
    }

    try {
        const { name, email, subject, message } = req.body;
        console.log('Received send request:', { name, email, subject, message });

        const to = 'pasindubanuka155@gmail.com';
        const html = `
      <div style="max-width:520px;margin:auto;background:#fff;border-radius:16px;box-shadow:0 4px 32px rgba(225,29,72,0.10);font-family:'Segoe UI',Arial,sans-serif;overflow:hidden;">
        <div style="background:linear-gradient(90deg,#ff4d7a,#ff6aa6,#ffd600,#00ffb4,#00b4ff);padding:24px 0;text-align:center;color:#fff;font-size:1.5rem;font-weight:700;letter-spacing:1px;">
          📧 New Contact Message
        </div>
        <div style="padding:32px 24px 24px 24px;">
          <p style="margin:0 0 12px 0;font-size:1.1rem;color:#e11d48;font-weight:600;">From: <span style="color:#7928ca;">${name || 'Website Visitor'}</span> &lt;<a href="mailto:${email || 'noreply@example.com'}" style="color:#00b4ff;text-decoration:none;">${email || 'noreply@example.com'}</a>&gt;</p>
          <p style="margin:0 0 12px 0;font-size:1.1rem;color:#7928ca;font-weight:600;">Subject: <span style="color:#e11d48;">${subject || 'No subject'}</span></p>
          <hr style="border:none;border-top:1px solid #eee;margin:18px 0;" />
          <div style="font-size:1.05rem;color:#333;line-height:1.7;white-space:pre-line;">${message || ''}</div>
        </div>
        <div style="background:#f9fafb;padding:16px 0;text-align:center;color:#888;font-size:0.95rem;border-top:1px solid #eee;">
          <span style="color:#ff4d7a;font-weight:600;">Portfolio Contact Form</span> | <span style="color:#00b4ff;">${new Date().toLocaleString()}</span>
        </div>
      </div>
    `;

        const result = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to,
            subject: subject || `Message from ${name || 'Website Visitor'}`,
            html,
        });

        console.log('Resend result:', result);
        return res.status(200).json({ ok: true, id: result.id, result });
    } catch (err) {
        console.error('send-email error', err);
        return res.status(500).json({ ok: false, error: err.message });
    }
}
