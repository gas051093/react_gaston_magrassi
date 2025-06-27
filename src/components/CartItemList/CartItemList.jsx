import { useContext } from "react"
import CartContext from "../Context/CartContext"
import CartItem from "./CartItem";
import './CartItemList.scss'

function CartItemList() {
    const { cart } = useContext(CartContext);

    return (
      <>
        <div className="CartItemList">
          <h2 className="text-center my-4">Carrito de compra Csistemas</h2>
          <div className="CartItemList__container p-4 my-3">
          {cart.length ? (cart.map((item) => <CartItem key={item.id} prod={item} />)) : (<p>Carrito Vacio! ingresa a nuestra tienda para ver nuestros productos</p>)}
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </>
    );
}

export default CartItemList