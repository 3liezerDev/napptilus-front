// src/contexts/CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.storage === newItem.storage
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.storage === newItem.storage
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const removeFromCart = (targetItem) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (
            item.id === targetItem.id &&
            item.color === targetItem.color &&
            item.storage === targetItem.storage
          ) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return null; // eliminar si solo hay 1
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const getTotalQuantity = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
