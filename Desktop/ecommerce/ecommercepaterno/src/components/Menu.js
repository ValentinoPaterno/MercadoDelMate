import React from 'react';

function Menu() {
    return (
    <>
    <div className="dropdown ml-5">
        <label tabIndex={0} className="btn m-1">
            Menu
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-100">
            <li>
                <a>Mates</a>
            </li>
            <li>
                <a>Bombillas</a>
            </li>
            <li>
                <a>Materas</a>
            </li>
            <li>
                <a>Yerbas</a>
            </li>
        </ul>
    </div>
    </>
    )
}

export default Menu;