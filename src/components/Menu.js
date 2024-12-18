import React from 'react';
import ProductCard from './ProductCard';

function Menu({ addToCart }) {
  const products1 = [
    { id: 1, name: 'Pastel de Carne', price: 12.0, image: require('../images/download.jpg') },
    { id: 2, name: 'Pastel de Carne e Queijo', price: 12.0, image: require('../images/download.jpg') },
    { id: 3, name: 'Pastel de Presunto e Mussarela', price: 12.0, image: require('../images/download.jpg') },
    { id: 5, name: 'Pastel de Frango com Catupiry', price: 12.0, image: require('../images/download.jpg') },
    { id: 5, name: 'Pastel de Queijo', price: 12.0, image: require('../images/download.jpg') },
  ];
  
  const products2 = [
    { id: 1, name: 'Pastel de 3 Queijos', description: 'Queijo, Mussarela e Catupiry', price: 15.0, image: require('../images/download.jpg') },
    { id: 2, name: 'Pastel de Pizza', description: 'Presunto, Mussarela, Milho, Azeitona e Orégano', price: 12.0, image: require('../images/download.jpg') },
    { id: 3, name: 'Pastel de Carne, Bacon e Palmito', price: 14.0, image: require('../images/download.jpg') },
    { id: 4, name: 'Pastel de Franbacon', description: 'Frango e Bacon', price: 12.0, image: require('../images/download.jpg') },
    { id: 5, name: 'Pastel de Strogonoff', description: 'Frango, Milho, Mussarela, Creme de Leite e Palmito', price: 15.0, image: require('../images/download.jpg') },
    { id: 6, name: 'Pastel A moda da casa', description: 'Carne, Azeitona, Tomate, Milho, Palmito e Bacon', price: 14.0, image: require('../images/download.jpg') },
    { id: 7, name: 'Pastel Hot Dog', description: 'Salsicha, Milho e Mussarela', price: 12.0, image: require('../images/download.jpg') },
    { id: 8, name: 'Pastel Costela', description: 'Costela e Mussarala', price: 16.0, image: require('../images/download.jpg') },
    { id: 8, name: 'Pastel Ialu', description: 'Carne, Frango, Bacon, Azeitona, Mussarela, Presunto, Palmito, Orégano, Milho, Tomate e Catupiry', price: 18.0, image: require('../images/download.jpg') },
  ];

  const products3 = [
    { id: 1, name: 'X Salada', description: 'Pão, Alface, Tomate, Hamburguer, Presunto, Mussarela, Batata palha e Milho', price: 16.0, image: require('../images/hamburguer.jpeg') },
    { id: 2, name: 'X dog', description: 'Pão, Maionese, Alface, Tomate, Salsicha, Batata Palha, Milho' , price: 15.0, image: require('../images/hamburguer.jpeg') },
    { id: 3, name: 'X bacon', description: 'Pão,Maionese, Hamburguer, Ovo, Bacon, Presunto, Mussarela, Batata Palha', price: 18.0, image: require('../images/hamburguer.jpeg') },
    { id: 4, name: 'X egg', description: 'Pão, Maionese, Alface, Tomate, Hamburguer, 2 Ovos, Batata Palha, Milho', price: 17.0, image: require('../images/hamburguer.jpeg') },
    { id: 5, name: 'X tudo', description: 'Pão, Maionese, Alface, Tomate, Hamburguer, Ovo, Salsicha, Bacon, Presunto, Mussarela, Batata Palha, Milho, Cheddar', price: 22.0, image: require('../images/hamburguer.jpeg') },
    { id: 6, name: 'X ialu', description: 'Pão, Maionese, Alface, Tomate, Hamburguer, Presunto, Mussarela, 2 Ovos, 2 Salsichas, Bacon, Cheddar, Filé de Frango, Lombo, Batata Palha, Milho', price: 30.0, image: require('../images/hamburguer.jpeg') },
    { id: 7, name: 'x franbacon', description: 'Pão, Maionese, Filé de Frango, Presunto, Mussarela, Bacon, Batata Palha, Milho, Alface, Tomate', price: 20.0, image: require('../images/hamburguer.jpeg') },
  ];

  const products4 = [
    { id: 1, name: 'Porção de batata', description: 'Batata, Bacon e Cheddar', price: 35.0,  image: require('../images/batata-porcao.jpg') },
    { id: 2, name: 'Torre de Batata Média', description: 'Batata, Presunto, Mussarela Cheddar, Calabresa, Bacon, Catupiry', price: 70.0, image: require('../images/torre-batata.jpg') },
    { id: 3, name: 'Torre de Batata Grande', description: 'Batata, Presunto, Mussarela Cheddar, Calabresa, Bacon, Catupiry', price: 96.0, image: require('../images/torre-batata.jpg') },
  ]
  
  return (
    <section className="menu">
      <h2>Pasteis simples</h2>
      <div className="product-list">
        {products1.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h2>Pasteis Especiais</h2>
      <div className="product-list">
        {products2.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h2>Sanduiches</h2>
      <div className="product-list">
        {products3.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h2>Porções</h2>
      <div className="product-list">
        {products4.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
