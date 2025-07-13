import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ success: false, message: 'No token provided' });
    }

    const secret = process.env.VITE_RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return res.status(500).json({ success: false, message: 'Missing RECAPTCHA_SECRET_KEY' });
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error: any) {
    console.error('Error verifying reCAPTCHA:', error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
}
