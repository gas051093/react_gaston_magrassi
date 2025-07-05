import CartItem from "../CartItem/CartItem"
import './CartList.scss'
import CartContext from '../../Context/CartContext'
import { formatPrice } from '../../Helpers/priceFormat'
import { useContext } from "react"
import { useNavigate } from "react-router"
import EmptyCart from "../EmptyCart"
import Swal from "sweetalert2"
function CartList({ cart, cartTotal}) {
  const { clearCart } = useContext(CartContext)
  const navigate = useNavigate();
  const showSwal = () => {
        Swal.fire({
          title: "Desea vaciar el carrito?",
          text: "Esto eliminara el carrito completo",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar",
        })
        .then((result) => {
          if (result.isConfirmed) {
            clearCart()
            Swal.fire({
              title: "Eliminado!",
              text: "Su carrito esta vacio!",
              icon: "success",
            });
          }
        });
    };
    return (
      <>
        <div className="CartList">
          <h2 className="text-center my-4">Carrito de compra Csistemas</h2>
          <div className="CartList__container p-4 my-3">
            {cart.length ? (
              cart.map((item) => <CartItem key={item.id} prod={item} />)
            ) : (
                <EmptyCart />
            )}
            {cart.length > 0 && (
              <div className="">
                <p className="p-0 m-0 mb-3 text-end CartList__total">Total: {formatPrice(cartTotal())}</p>
                <div className="d-flex justify-content-center gap-3">
                  <button className="CartList__btn" onClick={() => navigate('/checkout')}>Comprar</button>
                  <button className="CartList__btn " onClick={ () => showSwal()}>Vaciar carrito</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
}
export default CartList