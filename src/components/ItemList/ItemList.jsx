import Item from '../Item/Item';
import "./ItemList.scss";

function ItemList({ products}) { 

    return (
      <div className="ItemList row m-0 p-3 justify-content-center">
        <div className='ItemList__container d-flex flex-column gap-3'>
          {products.map((prod) => (<Item key={prod.id} prod={prod} />))}
        </div>
      </div>
    );
}
export default ItemList;