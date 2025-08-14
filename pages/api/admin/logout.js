export default function handler(req, res){
  res.setHeader('Set-Cookie', `gemora_admin=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0`);
  res.status(200).json({ ok: true });
}
