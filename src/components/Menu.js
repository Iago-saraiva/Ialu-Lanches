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
    { id: 8, name: 'Pastel Costela', description: 'Costela e Mussarala', price: 20.0, image: require('../images/download.jpg') },
    { id: 8, name: 'Pastel Ialu', description: 'Carne, Frango, Bacon, Azeitona, Mussarela, Presunto, Palmito, Orégano, Milho, Tomate e Catupiry', price: 18.0, image: require('../images/download.jpg') },
  ];

  const products3 = [
    { id: 1, name: 'X Salada', description: 'Pão, Alface, Tomate, Hamburguer, Presunto, Mussarela, Batata palha e Milho', price: 16.0, image: require('../images/hamburguer.jpeg') },
    { id: 2, name: 'X dog', description: 'Pão, Maionese, Alface, Tomate, Salsicha, Batata Palha, Milho' , price: 15.0, image: require('../images/hamburguer.jpeg') },
    { id: 3, name: 'X bacon', description: 'Pão,Maionese, Hamburguer, Ovo, Bacon, Presunto, Mussarela, Batata Palha', price: 18.0, image: require('../images/hamburguer.jpeg') },
    { id: 4, name: 'X egg', description: 'Pão, Maionese, Alface, Tomate, 2 Ovos, Batata Palha, Milho', price: 15.0, image: require('../images/hamburguer.jpeg') },
    { id: 5, name: 'X tudo', description: 'Pão, Maionese, Alface, Tomate, Hamburguer, Ovo, Salsicha, Bacon, Presunto, Mussarela, Batata Palha, Milho, Cheddar', price: 22.0, image: require('../images/hamburguer.jpeg') },
    { id: 6, name: 'X ialu', description: 'Pão, Maionese, Alface, Tomate, Hamburguer, Presunto, Mussarela, 2 Ovos, 2 Salsichas, Bacon, Cheddar, Filé de Frango, Lombo, Batata Palha, Milho', price: 30.0, image: require('../images/hamburguer.jpeg') },
    { id: 7, name: 'x franbacon', description: 'Pão, Maionese, Filé de Frango, Presunto, Mussarela, Bacon, Batata Palha, Milho, Alface, Tomate', price: 20.0, image: require('../images/hamburguer.jpeg') },
  ];

  const products4 = [
    { id: 1, name: 'Porção de almondega com mandioca', price: 45.0,  image: require('../images/porcao-mandioca.jpg') },
    { id: 2, name: 'Porção de batata', description: 'Batata, Bacon e Cheddar', price: 35.0,  image: require('../images/batata-porcao.jpg') },
    { id: 3, name: 'Torre de Batata Média', description: 'Batata, Presunto, Mussarela Cheddar, Calabresa, Bacon, Catupiry', price: 70.0, image: require('../images/torre-batata.jpg') },
    { id: 4, name: 'Torre de Batata Grande', description: 'Batata, Presunto, Mussarela Cheddar, Calabresa, Bacon, Catupiry', price: 96.0, image: require('../images/torre-batata.jpg') },
  ]

  const products5 = [
    { id: 1, name: 'Coca-Cola 2Litros', price: 12.0, image: require('../images/coca1.jpg') },
    { id: 2, name: 'Coca-Cola 1Litro', price: 8.0, image: require('../images/coca.png') },
    { id: 3, name: 'Fanta 2Litros', price: 10.0, image: require('../images/fanta.jpg') },
    { id: 4, name: 'Mineiro 1,5Litros', price: 8.0, image: require('../images/mineiro.jpg') },
  ]

  const products6 = [
    { id: 1, name: 'Coca-Cola 310ml', price: 5.0, image: require('../images/coca-lata.jpg') },
    { id: 2, name: 'Coca-Cola Zero 310ml', price: 5.0, image: require('../images/coca-zero.jpg') },
    { id: 3, name: 'Fanta 310ml', price: 5.0, image: require('../images/fanta-lata.jpg') },
    { id: 4, name: 'Sprite 310ml', price: 5.0, image: require('../images/sprite.jpg') },
    { id: 5, name: 'Àgua C/ Gás 500ml', price: 4.50, image: require('../images/gás.jpg') },
    { id: 6, name: 'Àgua S/ Gás 500ml', price: 3.50, image: require('../images/agua.jpg') },
  ]
  
  const products7 = [
    { id: 1, name: 'Skol 350ml', price: 6.0, image: require('../images/skol.jpg') },
    { id: 2, name: 'Brahma 350ml', price: 5.0, image: require('../images/brahma.jpg') },
    { id: 3, name: 'Amstel 350ml', price: 5.0, image: require('../images/amstel.jpg') },
    { id: 4, name: 'Heineken 350ml', price: 7.0, image: require('../images/heineken.jpg') },
  ]
  
  const products8 = [
    { id: 1, name: 'Batida de Vodka com morango', price: 18.0, image: require('../images/batida-morango.jpg') },
    { id: 2, name: 'Batida de Vodka com maracujá', price: 18.0, image: require('../images/batida-maracuja.jpg') },
  ]

  const products9 = [
    { id: 1, name: 'Batida com morango', price: 18.0, image: require('../images/batida-morango.jpg') },
    { id: 2, name: 'Batida com maracujá', price: 18.0, image: require('../images/batida-maracuja.jpg') },
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
      <h2>Bebidas</h2>
      <div className="product-list">
        {products5.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h2>Refrigerantes Lata</h2>
      <div className="product-list">
        {products6.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h2>Cervejas</h2>
      <div className="product-list">
        {products7.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h2>Bebidas Alcoólicas</h2>
      <div className="product-list">
        {products8.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h2>Bebidas não Alcoólicas</h2>
      <div className="product-list">
        {products9.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
