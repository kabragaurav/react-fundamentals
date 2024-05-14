/**
 * Container for Product component
 */
import React from 'react';
import Product from '../components/Product';

function ProductList() {
    const data = {
        id: 1,
        name: 'Amazon Atta',
        price: 1200,
        image_url: "https://www.pillsbury.in/wp-content/uploads/2021/09/Organic-Atta_LS.jpg",
        in_stock: 10,
    };

    return (
        <div>
            <Product data={data}/>
        </div>
    )
}

export default ProductList;