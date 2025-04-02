import "./CartProductCard.scss";
import { secureUrl } from "@/utils/secureUrl";

const CartProductCard = ({ item, onRemove }) => {
  return (
    <div className="cart-product">
      <img
        width="50px"
        src={secureUrl(item.imageUrl)}
        alt={item.name}
        className="cart-product__image"
      />
      <div className="cart-product__info">
        <h4 className="cart-product__name">{item.name}</h4>
        <p className="cart-product__details">
          {item.storage} | {item.color.toUpperCase()}
        </p>
        <p className="cart-product__price">
          {item.price} EUR <strong>x{item.quantity}</strong>
        </p>
        <button className="cart-product__remove" onClick={() => onRemove(item)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
