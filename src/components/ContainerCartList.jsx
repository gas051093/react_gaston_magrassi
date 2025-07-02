import { useContext } from "react"
import CartContext from "../Context/CartContext"
import CartList from "./CartList/CartList";

function ContainerCartList() { 
    const { cart, cartTotal } = useContext(CartContext);

    return (
        <CartList cart={cart} cartTotal={cartTotal} />
    )
}

export default ContainerCartList