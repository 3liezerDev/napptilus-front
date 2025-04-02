import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import "./CartItem.scss";

const CartItem = () => {
const { getTotalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart">
      <img src="/bag-icon.svg" alt="Carrito" className="cart-icon" />
      <span className="cart-count">{getTotalQuantity()}</span>    </Link>
  );
};

export default CartItem;
