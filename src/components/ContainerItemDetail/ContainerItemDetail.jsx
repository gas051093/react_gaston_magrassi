import { useEffect, useState } from "react";
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail";
function ContainerItemDetail() { 
    const [prod, setProd] = useState({});
    const { itemId } = useParams();

    const callJson = async(url) => {
        try {
            const resp = await fetch(`${url}`)
            const data = await resp.json();
            return data;
        } catch (err) { 
            console.log(`se encontro el siguiene error ${err}`)
        }
    }
    const getItems = async() => { 
        const data = await callJson(`http://dummyjson.com/products/${itemId}`)
        setProd(data)
    }
    useEffect(() => { 
        getItems()
    }, [])

    return (
        <ItemDetail prod={prod} />
    )
}

export default ContainerItemDetail