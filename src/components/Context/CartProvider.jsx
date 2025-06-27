import { useState } from "react";
import CartContext from "./CartContext";

function CartProvider({ children }) { 
    const [cart, setCart] = useState([])
    
    const addToCart = (item) => { 
        const productCard = cart.find(prod => prod.id === item.id)
        if (productCard) {
            setCart(cart.map(product => product.id === item.id ? { ...product, count: product.count + item.count } : product
            ))
        } else {
            setCart([...cart, item])  
        }
    }
    const getAmount = () => {
        const amounts = cart.map(item => item.count);
        const amount = amounts.reduce((acc, currentValue) => acc + currentValue, 0)
        return amount
    }

    const clearCart = () => { 
        setCart([]);
    }


    return (
        <CartContext.Provider value={{cart, addToCart, getAmount, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;