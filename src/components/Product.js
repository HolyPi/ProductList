import React from 'react';

function Product({data}) {
    const { name, description, price, category, id } = data
    return (
        <div className="product" key={id}>
            <h2>{ name }</h2>
            <p>{ price }</p>
            <p>{ description }</p>
            <small>{ category }</small>

        </div>
    )
}

export default Product