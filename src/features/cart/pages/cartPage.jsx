import { useCart } from "@/contexts/CartContext";
import CartProductCard from "../components/CartProductCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/animations/fadeVariants";

const CartPage = () => {
  const { cartItems, removeFromCart, getTotalQuantity } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-page">
      <h2 className="cart-result">CART ({getTotalQuantity()})</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-grid-container">
            <AnimatePresence mode="wait">
              {cartItems.map((item) => (
                <motion.article
                  key={`${item.id}-${item.color}-${item.storage}`}
                  {...fadeInUp}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <CartProductCard
                    item={item}
                    onRemove={removeFromCart}
                  />
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <div className="cart-summary">
            <Button
              label="Continue Shopping"
              parentMethod={() => navigate("/")}
              variant="outline"
            />
            <div className="cart-total">
              <span>Total {total} EUR</span>
              <Button
                variant="pay-button"
                label="Pay"
                parentMethod={() => console.log("Proceed to payment")}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
