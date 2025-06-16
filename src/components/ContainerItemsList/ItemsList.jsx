import Items from './Items';
import "./ContainerItemsList.scss";

function ItemsList({ products}) { 

    return (
      <div className="ItemsList row m-0">
        {products.map((prod) => (
          <Items key={prod.id} prod={prod} />
        ))}
      </div>
    );
}
export default ItemsList;