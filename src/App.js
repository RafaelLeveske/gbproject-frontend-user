import React, { useState, useEffect } from 'react';
// import './App.css';
import api from './services/api';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('products').then(response => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
