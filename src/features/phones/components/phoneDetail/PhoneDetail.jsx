import { useState } from "react";
import PhoneInfo from "./PhoneInfo";
import PhoneOptions from "./PhoneOptions";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInLeft } from "@/animations/fadeVariants";
import { Button } from "@/components";
import "./PhoneDetail.scss";

const PhoneDetail = ({ phone }) => {
  const [currentPrice, setCurrentPrice] = useState(phone.basePrice);
  const [currentImage, setCurrentImage] = useState(phone.colorOptions[0].imageUrl);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const isXiaomi = phone.brand.toUpperCase() === "XIAOMI";

  const handleAddToCart = () => {
    if (!selectedStorage || !selectedColor) return;

    const productToAdd = {
      id: phone.id,
      name: phone.name,
      brand: phone.brand,
      price: currentPrice,
      storage: selectedStorage,
      color: selectedColor,
      imageUrl: currentImage,
    };

    console.log("✅ Añadiendo al carrito:", productToAdd);
    // Aquí podrías hacer dispatch, llamada a API, etc.
  };

  return (
    <section className="phone-detail__content" aria-label={`Detalles del producto ${phone.name}`}>
      <figure className="phone-detail__image">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={currentImage}
            alt={`Imagen de ${phone.name}`}
            className={isXiaomi ? "image--xiaomi" : ""}
            {...fadeInLeft}
          />
        </AnimatePresence>
      </figure>

      <section className="phone-detail__info">
        <PhoneInfo name={phone.name} brand={phone.brand} price={currentPrice} />

        <PhoneOptions
          storageOptions={phone.storageOptions}
          colorOptions={phone.colorOptions}
          onPriceChange={setCurrentPrice}
          onColorChange={(colorName) => {
            setSelectedColor(colorName);
            const selected = phone.colorOptions.find(c => c.name === colorName);
            if (selected) setCurrentImage(selected.imageUrl);
          }}
          onStorageChange={setSelectedStorage}
        />

        <Button
          label="añadir"
          parentMethod={handleAddToCart}
          disabled={!selectedStorage || !selectedColor}
        />
      </section>
    </section>
  );
};

export default PhoneDetail;
