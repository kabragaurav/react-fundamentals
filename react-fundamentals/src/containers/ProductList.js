/**
 * Container for Product component
 */
import React from 'react';
import Product from '../components/Product';

function ProductList() {
    const data = [{
        id: 1,
        name: 'Amazon Atta',
        price: 1200,
        image_url: "https://www.pillsbury.in/wp-content/uploads/2021/09/Organic-Atta_LS.jpg",
        in_stock: 10,
    }, {
        id: 2,
        name: 'Amazon Soap',
        price: 200,
        image_url: "https://www.jiomart.com/images/product/original/490915879/lux-fresh-splash-bar-soap-with-cooling-mint-water-lily-150-g-pack-of-3-product-images-o490915879-p490915879-0-202301201903.jpg?im=Resize=(420,420)",
        in_stock: 5,
    }];

    return (
        <div> 
            {
                data.map(item => <Product data={item}
                                            btnClick={() => alert('gaurav kabra')}
                                            key={item.id}/>)
            }
        </div>
    )
}

export default ProductList;