import './Item.scss';
import { formatPrice } from "../../Helpers/priceFormat";
import { useNavigate } from 'react-router';
function Item({ prod }) { 
    const navigate = useNavigate()
    return (
        <div className="item__card">
            <img className='item__image' src={prod.img} alt={prod.title} />
            <div className='item__cont p-2'>
                <p className='item__title'>{prod.title}</p>
                <p className='item__price'>{formatPrice(prod.price)}</p>
                <p>Stock: {prod.stock}</p>
                <button onClick={() => navigate(`/item/${prod.id}`)} className='item__btn'>Ver mas</button>
            </div>
            
        </div>
    )
}
export default Item;