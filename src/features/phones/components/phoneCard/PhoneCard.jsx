import "./PhoneCard.scss";
import { PHONE_FIELDS } from "../../constants/apiFields";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  overlayVariants,
  fadeVariant,
  instantFade,
} from "../phoneCard/phoneCard.animations";

export const PhoneCard = ({ phone }) => {
  const id = phone[PHONE_FIELDS.ID];

  return (
    <Link to={`/product/${id}`} className="phone-card__link">
      <motion.article
        className="phone-card"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div
          className="phone-card__overlay"
          variants={overlayVariants}
          transition={{ duration: 0.4, ease: [0.15, 1, 0.5, 1] }}
        />

        <header className="phone-card__header">
          <img
            src={phone[PHONE_FIELDS.IMAGE_URL]}
            alt={phone[PHONE_FIELDS.NAME]}
            className={`${
              phone[PHONE_FIELDS.BRAND].toUpperCase() === "XIAOMI"
                ? "xiaomi-image"
                : "phone-card__image"
            }`}
          />
        </header>

        <main className="phone-card__main">
          <div className="phone-card__info">
            <motion.span className="phone-card__brand" variants={fadeVariant}>
              {phone[PHONE_FIELDS.BRAND].toUpperCase()}
            </motion.span>

            <motion.span className="phone-card__name" variants={instantFade}>
              {phone[PHONE_FIELDS.NAME].toUpperCase()}
            </motion.span>
          </div>

          <motion.span className="phone-card__price" variants={instantFade}>
            {phone[PHONE_FIELDS.BASE_PRICE]} EUR
          </motion.span>
        </main>
      </motion.article>
    </Link>
  );
};
