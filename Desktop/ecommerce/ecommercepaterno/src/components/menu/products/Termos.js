import React from 'react'
import Catalogo from '../Catalogo'
import Categorias from './Categorias'

const Termos = () => {
  return (
    <div className='wrapper-catalogo'>
        <Categorias></Categorias>
        <div className='productos-container flex flex-wrap'></div>
    </div>
  )
}

export default Termos