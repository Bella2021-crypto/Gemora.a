import Layout from '../../components/Layout';

export async function getServerSideProps({ params }){
  const id = parseInt(params.id, 10);
  // Use same sample as api/listings
  const items = [
    { id: 1, title: 'Chanel Classic Flap', price_cents: 1250000, image_url: '/logo.svg', description: 'Timeless medium lambskin.' },
    { id: 2, title: 'Rolex Datejust 36', price_cents: 3200000, image_url: '/logo.svg', description: 'Oystersteel and yellow gold.' },
    { id: 3, title: 'Gucci Ace Sneakers', price_cents: 210000, image_url: '/logo.svg', description: 'White leather with Web.' }
  ];
  const item = items.find(i => i.id === id) || items[0];
  return { props: { item } };
}

export default function Listing({ item }){
  return (
    <Layout>
      <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
        <div className="card"><img src={item.image_url} alt={item.title} style={{width:'100%', borderRadius:12}}/></div>
        <div className="card">
          <h2 style={{marginTop:0}}>{item.title}</h2>
          <div className="price" style={{fontSize:24}}>₦{(item.price_cents/100).toLocaleString()}</div>
          <p>{item.description}</p>
          <button className="btn" onClick={()=>alert('Checkout will use Paystack (to be wired).')}>Buy with Paystack</button>
        </div>
      </div>
    </Layout>
  );
}

