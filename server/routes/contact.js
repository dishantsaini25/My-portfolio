const express = require('express');
const router = express.Router();
const { sendWithNodemailer } = require('../services/nodemailerService');
const { sendWithResend } = require('../services/resendService');

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  try {
    // Try Nodemailer (Gmail) first
    await sendWithNodemailer({ name, email, subject, message });
    console.log('Email sent via Nodemailer (Gmail)');
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (nodemailerError) {
    console.error('Nodemailer failed:', nodemailerError.message);

    // Fallback to Resend
    try {
      await sendWithResend({ name, email, subject, message });
      console.log('Email sent via Resend (fallback)');
      return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (resendError) {
      console.error('Resend also failed:', resendError.message);
      return res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.',
      });
    }
  }
});

module.exports = router;
