import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { getProducts, filterProducts } from "../../firebase/db";

function ContainerItemList() { 
  const [prod, setProd] = useState();
  const { catName } = useParams();
  const [spinner, setSpinner] = useState(true)
    
  const getProd = async () => { 
        // setSpinner(true);
        if (catName) {
            const filter = await filterProducts(catName);
            setProd(filter)
        } else {
            const all = await getProducts();
            setProd(all)
        }  
    }
    useEffect(() => { 
        getProd()
    }, [catName])

    return (
        <>
        {prod ? (<ItemList products={prod} />) : (
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className="spinner-border " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </>
    )
}

export default ContainerItemList;