/**
 * Container for Product component
 */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../components/Product';
import { getProducts } from '../services/ProductService';

function ProductList() {
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