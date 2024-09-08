import React from 'react';
import ProductCard from './ProductCard';

function App() {
  const products = [
    { id: 1, name: 'Laptop', price: '$999' },
    { id: 2, name: 'Smartphone', price: '$499' },
    { id: 3, name: 'Headphones', price: '$199' },
  ];

  return (
    <div>
      <h1>Product List</h1>
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          name={product.name} 
          price={product.price} 
        />
      ))}
    </div>
  );
}

export default App;
import React from 'react';

function ProductCard({ name, price }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', margin: '8px', borderRadius: '4px' }}>
      <h2>{name}</h2>
      <p>Price: {price}</p>
    </div>
  );
}

export default ProductCard;
