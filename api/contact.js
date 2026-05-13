// Vercel Serverless Function — api/contact.js
// Vercel automatically serves this at /api/contact

const nodemailer = require('nodemailer');
const { Resend } = require('resend');

// ── helpers ──────────────────────────────────────────────────────────────────

const ownerHtml = ({ name, email, subject, message }) => `
<div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;color:#f1f5f9;border-radius:12px;overflow:hidden;">
  <div style="background:linear-gradient(135deg,#6366f1,#06b6d4);padding:30px;text-align:center;">
    <h1 style="margin:0;font-size:24px;color:white;">New Portfolio Message</h1>
    <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Someone reached out via your portfolio</p>
  </div>
  <div style="padding:30px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:12px 0;border-bottom:1px solid #1e1e2e;color:#94a3b8;font-size:13px;width:100px;">Name</td><td style="padding:12px 0;border-bottom:1px solid #1e1e2e;color:#f1f5f9;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:12px 0;border-bottom:1px solid #1e1e2e;color:#94a3b8;font-size:13px;">Email</td><td style="padding:12px 0;border-bottom:1px solid #1e1e2e;"><a href="mailto:${email}" style="color:#6366f1;">${email}</a></td></tr>
      <tr><td style="padding:12px 0;border-bottom:1px solid #1e1e2e;color:#94a3b8;font-size:13px;">Subject</td><td style="padding:12px 0;border-bottom:1px solid #1e1e2e;color:#f1f5f9;">${subject}</td></tr>
    </table>
    <div style="margin-top:24px;">
      <p style="color:#94a3b8;font-size:13px;margin-bottom:10px;">Message:</p>
      <div style="background:#111118;border-left:3px solid #6366f1;padding:16px 20px;border-radius:0 8px 8px 0;color:#f1f5f9;line-height:1.7;">${message.replace(/\n/g, '<br/>')}</div>
    </div>
    <div style="margin-top:24px;text-align:center;">
      <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#6366f1,#06b6d4);color:white;padding:12px 28px;border-radius:50px;text-decoration:none;font-weight:600;font-size:14px;">Reply to ${name}</a>
    </div>
  </div>
  <div style="padding:20px 30px;background:#060609;text-align:center;color:#475569;font-size:12px;">Sent from your portfolio contact form</div>
</div>`;

const senderHtml = ({ name, message }) => `
<div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;color:#f1f5f9;border-radius:12px;overflow:hidden;">
  <div style="background:linear-gradient(135deg,#6366f1,#06b6d4);padding:30px;text-align:center;">
    <h1 style="margin:0;font-size:24px;color:white;">Message Received! 🎉</h1>
  </div>
  <div style="padding:30px;">
    <p style="font-size:16px;color:#f1f5f9;">Hi <strong>${name}</strong>,</p>
    <p style="color:#94a3b8;line-height:1.8;">Thank you for reaching out! I've received your message and will get back to you as soon as possible — usually within 24 hours.</p>
    <div style="background:#111118;border:1px solid #1e1e2e;border-radius:10px;padding:20px;margin:24px 0;">
      <p style="color:#64748b;font-size:13px;margin:0 0 8px;">Your message:</p>
      <p style="color:#94a3b8;font-size:14px;line-height:1.7;margin:0;">${message.replace(/\n/g, '<br/>')}</p>
    </div>
    <p style="color:#94a3b8;line-height:1.8;">Feel free to check out my work on <a href="https://github.com/dishantsaini25" style="color:#6366f1;">GitHub</a> or connect on <a href="https://linkedin.com/in/dishant-saini" style="color:#6366f1;">LinkedIn</a>.</p>
    <p style="color:#f1f5f9;margin-top:24px;">Best regards,<br/><strong style="color:#6366f1;">Dishant Saini</strong><br/><span style="color:#64748b;font-size:13px;">MERN Full Stack Developer</span></p>
  </div>
  <div style="padding:20px 30px;background:#060609;text-align:center;color:#475569;font-size:12px;">© 2025 Dishant Saini Portfolio</div>
</div>`;

// ── Nodemailer (Gmail) ────────────────────────────────────────────────────────

async function sendWithNodemailer({ name, email, subject, message }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `📬 New Contact: ${subject}`,
    html: ownerHtml({ name, email, subject, message }),
  });

  await transporter.sendMail({
    from: `"Dishant Saini" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}! 👋`,
    html: senderHtml({ name, message }),
  });
}

// ── Resend (fallback) ─────────────────────────────────────────────────────────

async function sendWithResend({ name, email, subject, message }) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.GMAIL_USER,
    subject: `📬 New Contact: ${subject}`,
    html: ownerHtml({ name, email, subject, message }),
  });

  await resend.emails.send({
    from: 'Dishant Saini <onboarding@resend.dev>',
    to: email,
    subject: `Thanks for reaching out, ${name}! 👋`,
    html: senderHtml({ name, message }),
  });
}

// ── Handler ───────────────────────────────────────────────────────────────────

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  // Try Nodemailer first, fallback to Resend
  try {
    await sendWithNodemailer({ name, email, subject, message });
    console.log('✅ Email sent via Nodemailer (Gmail)');
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('⚠️ Nodemailer failed:', err.message);
    try {
      await sendWithResend({ name, email, subject, message });
      console.log('✅ Email sent via Resend (fallback)');
      return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (err2) {
      console.error('❌ Resend also failed:', err2.message);
      return res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
    }
  }
};
