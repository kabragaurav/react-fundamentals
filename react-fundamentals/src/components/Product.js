/**
 * This component mimicks a product tile in Flipkart 
 */
import React from 'react';

function Product(props) {
    const data = props.data;
    return (
        <div>
            <img src={data.productImage}/>
            <h5>{data.productName}</h5>
            <h5>{data.productPrice}</h5>
            <h5>{data.productStock}</h5>
            {data.productStock > 0 ? <button onClick={() => props.btnClick()}>Add to cart</button>
                : <p> Out of stock </p>}
        </div>
    );
}

export default Product;