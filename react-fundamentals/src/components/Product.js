/**
 * This component mimicks a product tile in Flipkart 
 */
import React from 'react';

function Product(props) {
    const data = props.data;
    return (
        <div>
            <img src={data.image_url}/>
            <h5>{data.name}</h5>
            <h5>{data.price}</h5>
            <h5>{data.in_stock}</h5>
            <button>Add to cart</button>
        </div>
    );
}

export default Product;