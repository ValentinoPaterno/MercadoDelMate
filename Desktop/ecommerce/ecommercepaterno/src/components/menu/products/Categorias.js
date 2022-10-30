import React from 'react'
import { Link, Route } from 'react-router-dom';

const Categorias = () => {
    return (
        <div className='categories-container'>
            <div className='productosText-container'>
                <p className='productos-text'>PRODUCTOS</p>
            </div>
            <ul className='lists-container'>
                <li className='li-categorie'>
                    <Link className='link-to' to={'/catalogo/mates'}>Mates</Link>
                    </li>
                <li className='li-categorie'>
                    <Link className='link-to' to={'/catalogo/termos'}>Termos</Link>
                </li>
                <li className='li-categorie'>
                    <Link className='link-to' to={'/catalogo/bombillas'}>Bombillas</Link>
                </li>
                <li className='li-categorie'>
                    <Link className='link-to' to={'/catalogo/materas'}>Materas</Link>
                </li>
                <li className='li-categorie'>
                    <Link className='link-to' to={'/catalogo/accesorios'}>Accesorios</Link>
                </li>
                <li className='li-categorie'>
                    <Link className='link-to' to={'/catalogo/combos'}>Combos</Link>
                </li>
            </ul>
        </div>
    )
}

export default Categorias