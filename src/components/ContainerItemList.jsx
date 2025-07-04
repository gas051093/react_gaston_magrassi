import { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router";
import { getProducts, filterProducts } from "../firebase/db";
import { withLoading } from "../hoc/withLoading";
const ItemListWithLoading = withLoading(ItemList);
function ContainerItemList() { 
  const [prod, setProd] = useState();
  const { catName } = useParams();
  useEffect(() => {
    const getProd = async () => {
      if (catName) {
        const filter = await filterProducts(catName);
        setProd(filter);
      } else {
        const all = await getProducts();
        setProd(all);
      }
    };
    getProd()
    }, [catName])

    return (
        <>
        <ItemListWithLoading prod={prod} />
      </>
    )
}
export default ContainerItemList;