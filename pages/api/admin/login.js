export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, password } = req.body || {};
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'bellarosennaji@gmail.com';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'GemoraAdmin!2025';

  if(email === ADMIN_EMAIL && password === ADMIN_PASSWORD){
    // NOTE: simple cookie (not JWT) for demo. Set Secure in production.
    res.setHeader('Set-Cookie', [
      `gemora_admin=1; HttpOnly; Path=/; SameSite=Lax; Max-Age=86400`
    ]);
    return res.status(200).json({ ok: true });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
}
