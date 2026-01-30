import { Resend } from 'resend';
import twilio from 'twilio';

const resend = new Resend(process.env.RESEND_API_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, serviceType, message } = req.body;

  // Send email via Resend
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'matthewriverahvac@gmail.com',
      subject: `New Quote Request from ${name}`,
      html: `<p><strong>Name:</strong> ${name}<br/><strong>Phone:</strong> ${phone}<br/><strong>Email:</strong> ${email}<br/><strong>Service Type:</strong> ${serviceType}<br/><strong>Message:</strong> ${message}</p>`
    });
  } catch (e) {
    return res.status(500).json({ error: 'Failed to send email' });
  }

  // Send SMS via Twilio
  try {
    await twilioClient.messages.create({
      body: `New Quote: ${name}, ${phone}, ${email}, ${serviceType}, ${message}`,
      from: process.env.TWILIO_PHONE_FROM, // Your Twilio number
      to: process.env.TWILIO_PHONE_TO      // Your cell number
    });
  } catch (e) {
    // Don't fail the whole request if SMS fails
  }

  return res.status(200).json({ success: true });
}
