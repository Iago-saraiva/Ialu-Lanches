import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import './App.css';

function App() {
  // Definindo o estado do carrinho
  const [cart, setCart] = useState([]);

  // Função para adicionar um produto ao carrinho
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Função para remover um produto do carrinho pelo índice
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header />

      <div className="main-content">
        <Menu addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
