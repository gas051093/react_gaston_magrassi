import { useContext } from "react"
import CartContext from "../Context/CartContext"
import CartItem from "./CartItem";

function CartItemList() {
    const { cart } = useContext(CartContext);

    return (
      <>
        <h2 className="text-center">Carrito de compra Csistemas</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Categoria</th>
            </tr>
                </thead>
                <tbody>
                   {cart.map((item) => (
            <CartItem prod={item} />
          ))} 
                </tbody>
          
        </table>
      </>
    );
}

export default CartItemList