import React from 'react'

const ItemListContainer = ({greeting}) => {
    const size = {
        height: "907px",
        backgroundImage: "url(" + "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/06/08092641/mate-1920-2.png" + ")",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const style = {
        color: "white",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "-1px 3px 2px rgba(0,0,0,0.64)"
    }
    return (
        <>
        <div style={size}>
            <h1 style={style}>{greeting}</h1>
        </div>
        </>
    )
}

export default ItemListContainer