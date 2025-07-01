import CartItem from "../CartItem/CartItem"
import './CartList.scss'
import { formatPrice } from '../Helpers/priceFormat'


function CartList({ cart, cartTotal}) {
  
    return (
      <>
        <div className="CartList">
          <h2 className="text-center my-4">Carrito de compra Csistemas</h2>
          <div className="CartList__container p-4 my-3">
            {cart.length ? (
              cart.map((item) => <CartItem key={item.id} prod={item} />)
            ) : (
              <p>
                Carrito Vacio! ingresa a nuestra tienda para ver nuestros
                productos
              </p>
            )}
            {cart.length > 0 && (<div className="position-relative">
              <p className="p-0 m-0 text-end CartList__total">
                Total: {formatPrice(cartTotal())}{" "}
              </p>
              <button className="CartList__btn position-absolute top-50 start-50 translate-middle">
                Comprar
              </button>
            </div>)}
          </div>
        </div>
      </>
    );
}

export default CartList