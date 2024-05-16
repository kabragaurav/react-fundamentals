/**
 * Class based component similar to func component ProductList.js
 */
import React from 'react';
import { getProducts } from '../services/ProductService';
import Product from '../components/Product';

class MyCustomClassComp extends React.Component {
    state = {data: [], err: 0};

    componentDidMount() {
        this.getData();
    }

    getData() {
        getProducts()
            .then(res => {
                this.setState({data: res.data})
            })
            .catch(ex => {
                this.setState({err: this.state.err+1})
            })
    }

    render() {
        return (
            <div> 
                {
                    this.state.data.map(item => <Product data={item}
                                                btnClick={() => alert('gaurav kabra')}
                                                key={item.productId}/>)
                }
            </div>
        );
    }
}

export default MyCustomClassComp;