// components/Layout.js
export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <header>
        <h1>Gemora</h1>
      </header>
      <main>{children}</main>
      <footer style={{ marginTop: "40px", textAlign: "center" }}>
        <p>© {new Date().getFullYear()} Gemora</p>
      </footer>
    </div>
  );
}

