import { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";
import './ItemCount.scss';
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
function ItemCount({product}) { 
  const [count, setCount] = useState(1)
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()
  const handleAddCart = () => { 
    addToCart({ ...product, count });
    Swal.fire({
      title: "Producto agregado con exito!",
      text: `se añadio el siguiente producto: ${product.title}`,
      icon: "success",
      draggable: false,
    });
  };
  const handleCart = () => { 
    addToCart({ ...product, count });
    navigate('/checkout')
  }
  const handleCountAdd = () => setCount(count < product.stock ? count + 1 : count);
  const handleCountRest = () => setCount(count > 1 ? count - 1 : 1);
  return (
    <>
      <div className="itemCount">
        <button className="itemCount__btn itemCount__btn--count m-0" onClick={handleCountRest}>-</button>
        <p className="itemCount__count m-0">{count}</p>
        <button className="itemCount__btn itemCount__btn--count m-0" onClick={handleCountAdd}>+</button>
      </div>
      <div className="d-flex flex-column gap-2">
        <button className='itemCount__btn' onClick={handleCart}>Comprar</button>
        <button className='itemCount__btn' onClick={handleAddCart}>Agregar al Carrito</button>
      </div>
    </>
    );
}
export default ItemCount