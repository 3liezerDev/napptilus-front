import { useState, useEffect } from "react";

const PhoneOptions = ({
  storageOptions,
  colorOptions,
  onPriceChange,
  onColorChange,
  onStorageChange, // ✅ Nueva prop
}) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [hoveredColor, setHoveredColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);

  // 🔁 Notificar precio y almacenamiento al padre
  useEffect(() => {
    const selected = storageOptions.find((opt) => opt.capacity === selectedStorage);

    if (onPriceChange && selected) {
      onPriceChange(selected.price);
    }

    if (onStorageChange) {
      onStorageChange(selectedStorage);
    }
  }, [selectedStorage]);

  // 🔁 Manejar selección de color
  const handleColorSelect = (colorName) => {
    setSelectedColor(colorName);
    if (onColorChange) {
      onColorChange(colorName);
    }
  };

  return (
    <section className="phone-detail__options" aria-label="Opciones del producto">
      {/* 🔹 STORAGE */}
      <fieldset className="phone-detail__storage">
        <legend>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</legend>
        <div className="storage-options" role="radiogroup">
          {storageOptions.map((option, index) => (
            <button
              key={index}
              className={`storage-option ${
                selectedStorage === option.capacity ? "storage-option--selected" : ""
              }`}
              role="radio"
              onClick={() => setSelectedStorage(option.capacity)}
            >
              {option.capacity}
            </button>
          ))}
        </div>
      </fieldset>

      {/* 🔹 COLORS */}
      <fieldset className="phone-detail__colors">
        <legend>COLOR. PICK YOUR FAVOURITE.</legend>
        <div className="color-options" role="radiogroup">
          {colorOptions.map((color, index) => (
            <div
              key={index}
              className={`color-option squad-container ${
                selectedColor === color.name ? "squad-container--selected" : ""
              }`}
              onClick={() => handleColorSelect(color.name)}
              onMouseEnter={() => setHoveredColor(color.name)}
              onMouseLeave={() => setHoveredColor(null)}
              role="radio"
            >
              <div
                className="color-squad"
                style={{ backgroundColor: color.hexCode }}
              />
            </div>
          ))}
        </div>

        {/* 🔹 Nombre del color seleccionado/hover */}
        <span className="selected-color-name">
          {hoveredColor || selectedColor || (
            <span className="invisible-placeholder">---</span>
          )}
        </span>
      </fieldset>
    </section>
  );
};

export default PhoneOptions;
