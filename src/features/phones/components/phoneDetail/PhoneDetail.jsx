import "./PhoneDetail.scss";
import phoneMock from "../../../../mocks/ind-product.json";

const PhoneDetail = () => {
  return (
    <main className="phone-detail">
      {/* Botón de regreso */}
      <button className="back-button" onClick={() => window.history.back()}>
        ← Back
      </button>

      <section className="phone-detail__content">
        {/* Imagen del producto */}
        <figure className="phone-detail__image">
          <img
            src={phoneMock.colorOptions[0].imageUrl}
            alt={phoneMock.name}
          />
        </figure>

        {/* Información del producto */}
        <section className="phone-detail__info">
          <h3 className="phone-detail__title">{phoneMock.name}</h3>
          <p className="phone-detail__price">{phoneMock.basePrice} EUR</p>

          {/* Opciones de almacenamiento */}
          <fieldset className="phone-detail__storage">
            <legend>STORAGE: How much space do you need?</legend>
            <div className="storage-options">
              {phoneMock.storageOptions.map((option, index) => (
                <button key={index} className="storage-option">
                  {option.capacity}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Opciones de color */}
          <fieldset className="phone-detail__colors">
            <legend>COLOR: Pick your favourite.</legend>
            <div className="color-options">
              {phoneMock.colorOptions.map((color, index) => (
                <div key={index} className="color-option">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: color.hexCode }}
                  ></div>
                  <span>{color.name}</span>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Botón de añadir al carrito */}
          <button className="add-to-cart">AÑADIR</button>
        </section>
      </section>
    </main>
  );
};

export default PhoneDetail;
