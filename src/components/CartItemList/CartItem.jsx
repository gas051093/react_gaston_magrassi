import './CartItem.scss'
import { useContext } from "react";
import { formatPrice } from "../Helpers/priceFormat";
import CartContext from "../Context/CartContext";
import Swal from "sweetalert2";
function CartItem({ prod }) { 
  const { removeFromCart } = useContext(CartContext)
  const showSwal = () => {
      Swal.fire({
        title: "Desea eliminar producto?",
        text: "Esto eliminara el producto de su carrito",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          removeFromCart(prod.id)
          Swal.fire({
            title: "Eliminado!",
            text: "Su producto a sido eliminado",
            icon: "success",
          });
        }
      });
  };
    return (
      <div className='CartItem'>
        <div>
          <img className="CartItem__img" src={ prod.img} alt={prod.title} />
        </div>
        <div>{prod.title}</div>
        <div>{ prod.count} U.</div>
        <div>{formatPrice(prod.price)}</div>
        <div><button onClick={()=> showSwal()} className='CartItem__btn'>X</button></div>
      </div>
    );
}

export default CartItem