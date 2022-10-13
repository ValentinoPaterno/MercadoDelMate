import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {
    return (
    <>
    <div className="dropdown ml-5">
        <label tabIndex={0} className="btn m-1">
            Menu
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-100">
            <li>
                <Link to={`/catalogo`}>Catálogo</Link>
            </li>
            <li>
                <Link to={`/contacto`}>Contacto</Link>
            </li>
            <li>
                <Link to={`/nosotros`}>Nosotros</Link>
            </li>
        </ul>
    </div>
    </>
    )
}

export default Menu;