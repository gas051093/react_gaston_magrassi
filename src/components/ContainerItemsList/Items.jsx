import './Items.scss'
function Items({ prod}) { 
    return (
        <div className="items__card">
            <img className='items__image' src={prod.thumbnail} alt={prod.title} />
            <div className='items__cont'>
                <p className='items__title'>{prod.title}</p>
                <p className='items__descrip'>{prod.description}</p>
                <p className='items__price'>$ {prod.price}</p>
                <p>Stock: {prod.stock}</p>
                <button className='items__btn'> Agregar al Carrito</button>
            </div>
            
        </div>
    )
    
}
export default Items;