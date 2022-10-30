import React from 'react'
import './catalogo.css'
import Categorias from './products/Categorias';

const Catalogo = () => {
  return (
    <>
    
      <div className='wrapper-catalogo'>
        <Categorias></Categorias>
        <div className='productos-container flex flex-wrap'>

        </div>
      </div>
    
    </>
  )
}

export default Catalogo