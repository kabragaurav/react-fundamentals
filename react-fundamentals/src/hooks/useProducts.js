/**
 * Hook for populating data
 */
import {useState, useEffect} from "react";
import { getProducts } from "../services/ProductService";

function useProducts() {
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

    return data;
}


export default useProducts;