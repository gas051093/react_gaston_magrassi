import { useEffect, useState } from "react";
import "./ContainerItemsList.scss";
import ItemsList from "./ItemsList";
import { useParams } from "react-router";

function ContainerItemsList() { 
    const [prod, setProd] = useState([]);
    const { catName } = useParams();
    
    async function callJson(url) {
        try {
            const response = await fetch(url);
            const data = await response.json()
            return data;
        } catch (err) { 
            alert(`error de conexion ${err}`)
        }
    }
    const getProd = async () => { 
        if (catName) {
            const filter = await callJson(`https://dummyjson.com/products/category/${catName}`);
            setProd(filter.products)
        } else {
            const all = await callJson(`https://dummyjson.com/products`)
            setProd(all.products)
        }
            
    }
    useEffect(() => { 
        getProd();
    },[catName])
    return <ItemsList products={prod} />;

}

export default ContainerItemsList;