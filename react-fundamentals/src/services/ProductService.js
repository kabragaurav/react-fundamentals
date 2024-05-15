import Axios from 'axios';

export const getProducts = () => {
    const url = 'https://raw.githubusercontent.com/kabragaurav/react-programming/main/assets/files/products.json';
    return Axios.get(url);
}