export default function handler(req, res){
  const items = [
    { id: 1, title: 'Chanel Classic Flap', price_cents: 1250000, image_url: '/logo.svg' },
    { id: 2, title: 'Rolex Datejust 36', price_cents: 3200000, image_url: '/logo.svg' },
    { id: 3, title: 'Gucci Ace Sneakers', price_cents: 210000, image_url: '/logo.svg' },
    { id: 4, title: 'Hermès Clic H Bracelet', price_cents: 540000, image_url: '/logo.svg' }
  ];
  res.status(200).json(items);
}
