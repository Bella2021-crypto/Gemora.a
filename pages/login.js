import { useState } from 'react';
import Layout from '../components/Layout';

export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [msg,setMsg]=useState('');
  async function login(e){ e.preventDefault(); setMsg('User login placeholder.'); }
  return (
    <Layout>
      <h2>User Login</h2>
      <form onSubmit={login} className="card form" style={{maxWidth:420}}>
        <label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)} required />
        <label>Password</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button className="btn" style={{marginTop:8}}>Login</button>
        <div style={{marginTop:8,color:'#bfbfbf'}}>{msg}</div>
      </form>
    </Layout>
  );
}
