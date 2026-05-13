const { Resend } = require('resend');

const sendWithResend = async ({ name, email, subject, message }) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Email to you (notification)
  await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.GMAIL_USER,
    subject: `📬 New Contact: ${subject}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #f1f5f9; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #6366f1, #06b6d4); padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; color: white;">New Portfolio Message</h1>
          <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">Sent via Resend (fallback)</p>
        </div>
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e; color: #94a3b8; font-size: 13px; width: 100px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e; color: #f1f5f9; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e; color: #94a3b8; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e; color: #94a3b8; font-size: 13px;">Subject</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e; color: #f1f5f9;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #94a3b8; font-size: 13px; margin-bottom: 10px;">Message:</p>
            <div style="background: #111118; border-left: 3px solid #6366f1; padding: 16px 20px; border-radius: 0 8px 8px 0; color: #f1f5f9; line-height: 1.7;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
        </div>
        <div style="padding: 20px 30px; background: #060609; text-align: center; color: #475569; font-size: 12px;">
          Sent from your portfolio contact form via Resend
        </div>
      </div>
    `,
  });

  // Auto-reply to sender
  await resend.emails.send({
    from: 'Dishant Saini <onboarding@resend.dev>',
    to: email,
    subject: `Thanks for reaching out, ${name}! 👋`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #f1f5f9; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #6366f1, #06b6d4); padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; color: white;">Message Received! 🎉</h1>
        </div>
        <div style="padding: 30px;">
          <p style="font-size: 16px; color: #f1f5f9;">Hi <strong>${name}</strong>,</p>
          <p style="color: #94a3b8; line-height: 1.8;">
            Thank you for reaching out! I've received your message and will get back to you as soon as possible — usually within 24 hours.
          </p>
          <div style="background: #111118; border: 1px solid #1e1e2e; border-radius: 10px; padding: 20px; margin: 24px 0;">
            <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Your message:</p>
            <p style="color: #94a3b8; font-size: 14px; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
          <p style="color: #f1f5f9; margin-top: 24px;">Best regards,<br/><strong style="color: #6366f1;">Dishant Saini</strong><br/><span style="color: #64748b; font-size: 13px;">MERN Full Stack Developer</span></p>
        </div>
        <div style="padding: 20px 30px; background: #060609; text-align: center; color: #475569; font-size: 12px;">
          © 2025 Dishant Saini Portfolio
        </div>
      </div>
    `,
  });
};

module.exports = { sendWithResend };
