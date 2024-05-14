/**
 * This component mimicks a product tile in Flipkart 
 */
import React from 'react';

function Product() {
    const data = {
        id: 1,
        name: 'Amazon Atta',
        price: 1200,
        image_url: "https://www.pillsbury.in/wp-content/uploads/2021/09/Organic-Atta_LS.jpg",
        in_stock: 10,
    };

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