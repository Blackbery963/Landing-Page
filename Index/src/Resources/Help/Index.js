// appwrite-email-function/index.js
const fetch = require('node-fetch');

module.exports = async function (req, res) {
  try {
    const payload = JSON.parse(req.payload);
    const { name, email, message } = payload;

    // Validate required fields
    if (!name || !email || !message) {
      throw new Error('Missing required fields');
    }

    // Prepare email content
    const emailData = {
      messageId: 'unique()',
      from: 'noreply@yourdomain.com',
      to: 'swarnadipb727@gmail.com',
      subject: `New Help Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #4f46e5;">New Help Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f3f4f6; padding: 12px;">${message}</p>
        </div>
      `
    };

    // Send email via Appwrite
    const emailResponse = await fetch(
      `https://cloud.appwrite.io/v1/messaging/messages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Appwrite-Project': import.meta.env.VITE_APPWRITE_FUNCTION_ID,
          'X-Appwrite-Key': import.meta.env.VITE_APPWRITE_API_KEY
        },
        body: JSON.stringify(emailData)
      }
    );

    if (!emailResponse.ok) {
      const error = await emailResponse.json();
      throw new Error(error.message || 'Failed to send email');
    }

    return res.json({ success: true });
  } catch (error) {
    return res.json({ 
      success: false,
      error: error.message || 'Server error'
    });
  }
};