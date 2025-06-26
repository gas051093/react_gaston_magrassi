import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { getProducts} from "../../firebase/db";

function ContainerItemList() { 
    const [prod, setProd] = useState([]);
    const { catName } = useParams();
    
    const getProd = async () => { 
        if (catName) {
            const filter = await callJson(`https://dummyjson.com/products/category/${catName}`);
            setProd(filter.products)
        } else {
            const all = await getProducts();
            setProd(all)
        }  
    }
    useEffect(() => { 
        getProd()
    }, [catName])

    return (
        <ItemList products={prod} />
    )
}

export default ContainerItemList;