import Link from 'next/link';

export default function Layout({ children }){
  return (
    <div>
      <nav className="nav">
        <div className="container" style={{display:'flex',alignItems:'center',gap:16}}>
          <div className="brand">
            <img src="/logo.svg" alt="Gemora" width="24" height="24" />
            <span>Gemora</span>
          </div>
          <div style={{marginLeft:'auto', display:'flex', gap:16}}>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/admin-login">Admin</Link>
          </div>
        </div>
      </nav>
      <main className="container">{children}</main>
      <div className="footer">© {new Date().getFullYear()} Gemora — Where Luxury Finds a New Home</div>
    </div>
  );
}
