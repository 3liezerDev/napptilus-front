import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PhonesPage from "../features/phones/pages/PhonesPage";
import PhoneDetailPage from "../features/phones/pages/PhoneDetailPage";
import CartPage  from "../features/cart/pages/cartPage.jsx";
import { AnimatePresence } from "framer-motion";

const AppRouter = () => {
    return (
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PhonesPage />} />
          <Route path="product/:id" element={<PhoneDetailPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
      </AnimatePresence>
    );
  };

export default AppRouter;
