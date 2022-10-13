import React from 'react'

const ItemDetailContainer = ({url, producto, descripcion}) => {
    return (
        <div className="card w-60 bg-base-100 shadow-xl">
    <figure>
        <img src={url} alt="Shoes" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">{producto}</h2>
        <p>{descripcion}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Ver Detalles</button>
        </div>
    </div>
    </div>
    )
}

export default ItemDetailContainer