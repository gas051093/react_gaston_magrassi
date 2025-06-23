import { useContext } from "react"
import CartContext from "../Context/CartContext"
import CartItem from "./CartItem";

function CartItemList() {
    const { cart } = useContext(CartContext);

    return (
        <>
        {cart.map(item => <CartItem prod={item} />)}
        </>
    )
}

export default CartItemList