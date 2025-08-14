import { useState } from 'react';
import Layout from './components/Layout';

export default function AdminLogin(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [msg,setMsg]=useState('');

  async function onSubmit(e){
    e.preventDefault();
    setMsg('Checking…');
    const res = await fetch('/api/admin/login', {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ email, password })
    });
    if(res.ok){
      window.location.href = '/admin';
    }else{
      const j = await res.json().catch(()=>({error:'Invalid'}));
      setMsg(j.error || 'Invalid credentials');
    }
  }

  return (
    <Layout>
      <div className="card" style={{maxWidth:420, margin:'0 auto'}}>
        <div style={{textAlign:'center', marginBottom:16}}>
          <img src="/logo.svg" width="44" height="44" alt="Gemora"/>
          <h2 style={{marginBottom:4}}>Admin Sign In</h2>
          <p style={{color:'#bfbfbf', marginTop:0}}>Luxury Console Access</p>
        </div>
        <form onSubmit={onSubmit} className="form">
          <label>Email</label>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <label>Password</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <button className="btn" style={{marginTop:8, width:'100%'}}>Sign In</button>
          <div style={{marginTop:8, color:'#bfbfbf'}}>{msg}</div>
        </form>
      </div>
    </Layout>
  );
}
