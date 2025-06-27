import './CartItem.scss'
function CartItem({ prod }) { 
    return (
      <div className='CartItem'>
        <div>
          <img className="CartItem__img" src={ prod.img} alt={prod.title} />
        </div>
        <div>{prod.title}</div>
        <div>{ prod.count}</div>
        <div>$ {prod.price}</div>
        <div><button className='CartItem__btn'>X</button></div>
      </div>
    );
}

export default CartItem