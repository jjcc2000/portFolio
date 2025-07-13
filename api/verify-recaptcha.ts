import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const { token } = req.body;
  console.log(`Received token: ${token}`);
  
  if (!token) {
    return res.status(400).json({ success: false, message: 'No token provided' });
  }

  const secret = process.env.VITE_RECAPTCHA_SECRET_KEY!;
  const verifyURL = `https://www.google.com/recaptcha/api/siteverify`;

  const formData = new URLSearchParams();
  formData.append('secret', secret);
  formData.append('response', token);

  const response = await fetch(verifyURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData,
  });

  const data = await response.json();
  return res.status(200).json(data);
}
