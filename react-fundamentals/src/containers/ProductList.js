/**
 * Container for Product component
 */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../components/Product';
import { getProducts } from '../services/ProductService';
import useProducts from '../hooks/useProducts';

function ProductList() {
    // If you don't use hook useProducts uncomment below code
    /*
        let [data, setData] = useState([]);

        const populateData = () => getProducts()
                .then(res => {
                    console.log(res);
                    setData(res.data);
                })
                .catch(ex => alert(ex));

        useEffect(() => {
            populateData()
        }, []);
    */

    let data = useProducts();

    return (
        <div> 
            {
                data.map(item => <Product data={item}
                                            btnClick={() => alert('gaurav kabra')}
                                            key={item.productId}/>)
            }
        </div>
    )
}

export default ProductList;