// components/Layout.js
import React from 'react';

export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <header style={{ borderBottom: '1px solid #ddd', marginBottom: '20px' }}>
        <h1 style={{ color: '#bfa14a' }}>Gemora</h1>
      </header>
      <main>{children}</main>
      <footer style={{ borderTop: '1px solid #ddd', marginTop: '20px', paddingTop: '10px', fontSize: '14px', color: '#777' }}>
        &copy; {new Date().getFullYear()} Gemora Luxury Marketplace
      </footer>
    </div>
  );
}
