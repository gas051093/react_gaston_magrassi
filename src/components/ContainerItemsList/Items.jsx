import './Items.scss'
import { useNavigate } from 'react-router';
function Items({ prod }) { 
    const navigate = useNavigate()
    return (
        <div className="items__card">
            <img className='items__image' src={prod.thumbnail} alt={prod.title} />
            <div className='items__cont'>
                <p className='items__title'>{prod.title}</p>
                <p className='items__descrip'>{prod.description}</p>
                <p className='items__price'>$ {prod.price}</p>
                <p>Stock: {prod.stock}</p>
                <button onClick={() => navigate(`/item/${prod.id}`)} className='items__btn'>Ver mas</button>
            </div>
            
        </div>
    )
    
}
export default Items;