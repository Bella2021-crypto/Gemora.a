import { useEffect, useRef } from 'react';
import Layout from '../../components/Layout';
import Chart from 'chart.js/auto';

export async function getServerSideProps({ req }){
  const cookie = req.headers.cookie || '';
  const isAdmin = cookie.includes('gemora_admin=1');
  if(!isAdmin){
    return {
      redirect: { destination: '/admin-login', permanent: false }
    };
  }
  // Mock KPIs
  return { props: {
    kpis: {
      sales: 4520000, orders: 128, pending: 7, inStock: 342
    },
    products: [
      {id:1, title:'Chanel Classic Flap', price_cents:1250000, stock:3},
      {id:2, title:'Rolex Datejust 36', price_cents:3200000, stock:2},
      {id:3, title:'Gucci Ace Sneakers', price_cents:210000, stock:18},
      {id:4, title:'Hermès Clic H Bracelet', price_cents:540000, stock:5}
    ],
    salesSeries: [220, 340, 410, 380, 520, 610, 700] // mock weekly sales
  }};
}

export default function Admin({ kpis, products, salesSeries }){
  const lineRef = useRef(null);
  const barRef  = useRef(null);

  useEffect(()=>{
    const line = new Chart(lineRef.current, {
      type:'line',
      data:{ labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets:[{ label:'Revenue (₦k)', data:salesSeries, borderWidth:2 }]},
      options:{ plugins:{ legend:{display:false} } }
    });
    const bar = new Chart(barRef.current, {
      type:'bar',
      data:{ labels: products.map(p=>p.title.split(' ')[0]),
        datasets:[{ label:'Stock', data: products.map(p=>p.stock) }]},
      options:{ plugins:{ legend:{display:false} } }
    });
    return ()=>{ line.destroy(); bar.destroy(); };
  }, [products, salesSeries]);

  return (
    <Layout>
      <h2 style={{marginTop:0}}>Admin Dashboard</h2>

      <div className="kpi">
        <div className="card"><span className="label">Total Sales</span><span className="value">₦{(kpis.sales).toLocaleString()}</span></div>
        <div className="card"><span className="label">Orders</span><span className="value">{kpis.orders}</span></div>
        <div className="card"><span className="label">Pending</span><span className="value">{kpis.pending}</span></div>
        <div className="card"><span className="label">In Stock</span><span className="value">{kpis.inStock}</span></div>
      </div>

      <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
        <div className="card">
          <h3 style={{marginTop:0}}>Weekly Revenue</h3>
          <canvas ref={lineRef} height="160"></canvas>
        </div>
        <div className="card">
          <h3 style={{marginTop:0}}>Stock by Product</h3>
          <canvas ref={barRef} height="160"></canvas>
        </div>
      </div>

      <div className="card" style={{marginTop:16}}>
        <h3 style={{marginTop:0}}>Products</h3>
        <table className="table">
          <thead>
            <tr>
              <th style={{width:60}}>ID</th>
              <th>Title</th>
              <th style={{width:160}}>Price</th>
              <th style={{width:100}}>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p=>(
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>₦{(p.price_cents/100).toLocaleString()}</td>
                <td>{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
