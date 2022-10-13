import React from 'react'
import './catalogo.css'
import ItemDetailContainer from './ItemDetailContainer';

const Catalogo = () => {
  const stylesCatalogo = {
    color: 'black',
    fontWeight: 'bold'
  };
  return (
    <>
      <div style={stylesCatalogo}>
        <div>
          <div>
            <p>Mates</p>
            <div className='flex justify-around'>
              <ItemDetailContainer url={"https://upload.wikimedia.org/wikipedia/commons/a/a6/Mate_en_calabaza.jpg"} producto={"Mate estilo campo"}/>
              <ItemDetailContainer url={"https://http2.mlstatic.com/D_NQ_NP_822704-MLA42649287303_072020-O.jpg"} producto={"Mate Camionero"}/>
              <ItemDetailContainer url={"https://apolomates.com.ar/wp-content/uploads/2021/11/imp-liso.jpg"} producto={"Mate Imperial"}/>
              <ItemDetailContainer url={"https://electroben.com.ar/wp-content/uploads/2020/07/torpedo.png"} producto={"Mate Torpedo"}/>
              </div>
          </div>
          <div>
            <p>Yerbas</p>
            <div className='flex justify-around'>
              
              </div>
          </div>
          <div>
            <p>Materas</p>
            <div className='flex justify-around'>
              
              </div>
          </div>
          <div>
            <p>Accesorios</p>
            <div className='flex justify-around'>
              
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalogo