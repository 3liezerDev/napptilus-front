// SimilarItemsCarousel.jsx
import {PhoneCard} from "../phoneCard/PhoneCard";
import "./SimilarItemsCarousel.scss";

const SimilarItemsCarousel = ({ similarProducts }) => {
  if (!similarProducts || similarProducts.length === 0) return null;

  return (
    <section className="similar-items-carousel">
      <div className="title-container">
        <h3>SIMILAR ITEMS</h3>
      </div>
      <div className="carousel-track">
        {similarProducts.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} isCarouselItem />
        ))}
      </div>
    </section>
  );
};

export default SimilarItemsCarousel;
