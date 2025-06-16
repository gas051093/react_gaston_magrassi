import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
function ContainerItemDetail() { 
    const [prod, setProd] = useState([]);
    const { itemId } = useParams();
    const navigate = useNavigate();

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
    },[])

    return (
        <div>
            <p>{prod.title}</p>
            <button onClick={() => navigate(`/`)} >Volver</button>
        </div>
    )
}

export default ContainerItemDetail