import React, { useContext } from 'react'
import './/catalogo.css'
import { CartContext } from './Context/CartContext'
import { DataProductos } from './Data/DataProductos'

const ItemDetailContainer = () => {
    const {addItemToCart} = useContext(CartContext)
    return (
        <div className='productos-container flex flex-wrap'>
            {DataProductos.map((product, i) => (
            <div key={i}>
                <div className="m-3 card max-h-96 w-60 bg-base-200 shadow-xl">
                    <figure className='product-img px-10 pt-10'>
                        <img className="product-img" src={product.img} alt={product.name}/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title product-tittle">{product.name}</h2>
                        <p className='product-price'>{product.price}</p>
                        <div className='items-center p-2'>
                            <button onClick={() => addItemToCart(product)} className="btn">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
        )}

export default ItemDetailContainer
