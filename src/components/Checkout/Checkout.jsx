import './Checkout.scss'
import  CartContext  from '../../Context/CartContext'
import { useContext, useState } from 'react'
import { createOrder } from '../../firebase/db'
import { serverTimestamp } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
function Checkout() { 
  const { cart, clearCart } = useContext(CartContext)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [tel, setTel] = useState()
  const navigate = useNavigate()
  const handleSubmit = async (e) => { 
    e.preventDefault()
    Swal.fire({
        title: 'Enviando orden',
        text: 'por favor aguarde',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
      })
    try {
      if (cart.length === 0) { 
        Swal.fire({
          icon: "warning",
          title: "Tu carrito está vacío",
          text: "Agregá productos antes de finalizar la compra.",
          didOpen: () => Swal.hideLoading(),
        });
        return;
      }
      const orderId = await createOrder({
        name,
        email,
        tel,
        productos: cart,
        time: serverTimestamp()
      });
      if (orderId) {
        Swal.fire({
          icon: "success",
          title: "S registro tu compra",
          text: `ID de la compra: ${orderId}`,
          didClose: () => {
            navigate('/')
            clearCart()
          }
        });
      } else { 
        Swal.fire({
          icon: "error",
          title: "Error al registrar tu compra",
          text: "Intentalo nuevamente más tarde.",
          didOpen: () => Swal.hideLoading()
        });
      }
    } catch (err) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Ups, algo salió mal",
        text: err || "No se pudo enviar la orden.",
        didOpen: () => Swal.hideLoading(),
      });
    }
  }
  return (
    <section className="d-flex justify-content-center align-items-center checkout p-3">
      <div className="checkout__content p-4 col-12 col-md-5 ">
        <h4 className="text-center">Checkout 🛒</h4>
        <form
          className="d-flex flex-column gap-2 checkout__form"
          onSubmit={handleSubmit}
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="nombre">Nombre</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="tel"
              placeholder="Telefono"
              required
              onChange={(e) => setTel(e.target.value)}
              pattern="^\d{5,15}$"
            />
            <label htmlFor="tel">Telefono</label>
          </div>
          <button type="submit" className="checkout__btn">
            Comprar
          </button>
        </form>
      </div>
    </section>
  );
}
export default Checkout