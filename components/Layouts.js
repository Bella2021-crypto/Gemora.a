import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "Gemora" }) {
  return (
    <div style={styles.container}>
      <Head>
        <title>{title} | Gemora</title>
        <meta name="description" content="Luxury redefined at Gemora" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav style={styles.nav}>
        <h1 style={styles.logo}>GEMORA</h1>
        <div style={styles.links}>
          <Link href="/" style={styles.link}>Home</Link>
          <Link href="/login" style={styles.link}>Admin</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>{children}</main>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Gemora. All rights reserved.
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Playfair Display', serif",
    backgroundColor: "#faf7f2",
    color: "#3a2c2a",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#fff",
    borderBottom: "1px solid #e5ded8",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    letterSpacing: "3px",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#3a2c2a",
    fontWeight: "500",
  },
  main: {
    flex: 1,
    padding: "2rem",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.9rem",
    backgroundColor: "#fff",
    borderTop: "1px solid #e5ded8",
  },
};
