import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Navigate, useNavigate } from "react-router";

function CartWidget() { 
  const { getAmount } = useContext(CartContext);
  const navigate = useNavigate();
  const amount = getAmount();
    return (
      <button onClick={()=> navigate('/cart')} type="button" className="btn btn-primary position-relative">
        <i className="bi bi-cart3"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {amount}
        </span>
      </button>
    );
}

export default CartWidget;