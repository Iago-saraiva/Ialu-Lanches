import React from 'react';
import fundo from '../images/fundo.png';

function Header() {
  return (
    <header className="header">
      <div className='topo'>
      <div className='header-logo'> 
        <img style={{ margin: '10px' }} className='logo' src={fundo} />
      </div>
      <h1>Pastelaria e Hamburgueria</h1>
      </div>
    </header>
  );
}

export default Header;
