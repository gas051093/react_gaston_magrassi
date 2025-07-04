import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail/ItemDetail";
import { getProduct } from "../firebase/db";
import { withLoading } from "../hoc/withLoading";
const ItemDetailWithLoading = withLoading(ItemDetail)
function ContainerItemDetail() { 
    const [prod, setProd] = useState();
    const { itemId } = useParams();
    useEffect(() => { 
      const getItems = async () => {
        const data = await getProduct(itemId);
        setProd(data);
      };
      getItems();
    }, [itemId])
    return (
      <>
        <ItemDetailWithLoading prod={prod} />
      </>
    );
}
export default ContainerItemDetail