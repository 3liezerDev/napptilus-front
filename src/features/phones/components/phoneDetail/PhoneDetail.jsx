import "./PhoneDetail.scss";

const PhoneDetail = ({ phone }) => {
  if (!phone) return null;

  return (
    <main className="phone-detail">
      <section className="phone-detail__content">
        {/* Imagen del producto */}
        <figure className="phone-detail__image">
          <img
            src={phone.colorOptions[0].imageUrl}
            alt={phone.name}
          />
        </figure>

        {/* Información del producto */}
        <section className="phone-detail__info">
          <h3 className="phone-detail__title">{phone.name}</h3>
          <p className="phone-detail__price">{phone.basePrice} EUR</p>

          {/* Opciones de almacenamiento */}
          <fieldset className="phone-detail__storage">
            <legend>STORAGE: How much space do you need?</legend>
            <div className="storage-options">
              {phone.storageOptions.map((option, index) => (
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
              {phone.colorOptions.map((color, index) => (
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

