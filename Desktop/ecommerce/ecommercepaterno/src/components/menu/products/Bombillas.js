import React from 'react'
import Catalogo from '../Catalogo'
import Categorias from './Categorias'

const Bombillas = () => {
  return (
    <div>
      <div className='wrapper-catalogo'>
        <Categorias></Categorias>
        <div className='productos-container flex flex-wrap'></div>
      </div>
    </div>
  )
}

export default Bombillas