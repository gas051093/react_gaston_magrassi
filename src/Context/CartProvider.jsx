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

    const removeFromCart = (id) => { 
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }
    const cartTotal = () => { 
        const subTotal = cart.map(prod => prod.price * prod.count)
        const total = subTotal.reduce((acc, currentValue) => acc + currentValue, 0)
        return total
    }

    return (
      <CartContext.Provider
        value={{ cart, addToCart, getAmount, clearCart, removeFromCart, cartTotal}}
      >
        {children}
      </CartContext.Provider>
    );
}

export default CartProvider;