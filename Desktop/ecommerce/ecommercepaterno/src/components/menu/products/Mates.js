import React from 'react'
import { CartProvider } from '../Context/CartContext';
import ItemDetailContainer from '../ItemDetailContainer'
import Categorias from './Categorias';

const Mates = () => {
  return (
    <>
    <div className='wrapper-catalogo'>
        <Categorias></Categorias>
        <div className='productos-container flex flex-wrap'>
        <CartProvider>
          <ItemDetailContainer/>
        </CartProvider>  
        </div>
      </div>
    </>
  )
}

export default Mates