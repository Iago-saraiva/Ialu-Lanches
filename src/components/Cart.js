import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <aside className="cart">
      <h2>Carrinho</h2>
      {cart.length === 0 ? (
        <p>Sem itens no carrinho!</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              {item.name} - R$ {item.price.toFixed(2)}
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Cart;
