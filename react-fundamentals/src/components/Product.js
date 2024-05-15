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
            {data.in_stock > 0 ? <button onClick={() => props.btnClick()}>Add to cart</button>
                : null}
        </div>
    );
}

export default Product;