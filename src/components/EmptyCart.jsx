import { useNavigate } from "react-router";
function EmptyCart() {
    const navigate = useNavigate()
    return (
      <div className="d-flex flex-column align-items-center">
        <p className="text-center">
          Carrito Vacio! ingresa a la tienda para ver nuestros productos🤭
        </p>
        <button
          className="CartList__btn"
          onClick={() => navigate("/")}
        >
          Ir a la Tienda
        </button>
      </div>
    );
}
export default EmptyCart