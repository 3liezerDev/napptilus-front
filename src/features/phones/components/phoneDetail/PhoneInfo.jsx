import { motion, AnimatePresence } from "framer-motion";
import { priceMotion } from "@/animations/priceVariants";

const PhoneInfo = ({ name, brand, price }) => {
  return (
    <section className="phone-info" aria-label={`Información de ${name}`}>
      <h3 className="phone-detail__title">{name.toUpperCase()}</h3>
      <p className="phone-detail__brand">{brand}</p>

      <p className="phone-detail__price">
        From{" "}
        <AnimatePresence mode="wait">
          <motion.span key={price} {...priceMotion}>
            {price}
          </motion.span>
        </AnimatePresence>{" "}
        EUR
      </p>
    </section>
  );
};

export default PhoneInfo;
