import "./PhoneCard.scss";
import { PHONE_FIELDS } from "../../constants/apiFields"; // 🔹 Importamos los campos de la API

export const PhoneCard = ({ phone }) => {
  return (
    <article className="phone-card">
      <header className="phone-card__header">
        <img src={phone[PHONE_FIELDS.IMAGE_URL]} alt={phone[PHONE_FIELDS.NAME]} className="phone-card__image" />
      </header>
      <main className="phone-card__main">
        <div className="phone-card__info">
          <span className="phone-card__brand">{phone[PHONE_FIELDS.BRAND].toUpperCase()}</span>
          <span className="phone-card__name">{phone[PHONE_FIELDS.NAME].toUpperCase()}</span>
        </div>
        <span className="phone-card__price">{phone[PHONE_FIELDS.BASE_PRICE]} EUR</span>
      </main>
    </article>
  );
};
