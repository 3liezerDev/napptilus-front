import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PhonesPage from "../features/phones/pages/PhonesPage";
import PhoneDetailPage from "../features/phones/pages/PhoneDetailPage";
import CartPage  from "../features/cart/pages/cartPage.jsx";

const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PhonesPage />} />
          <Route path="product/:id" element={<PhoneDetailPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    );
  };

export default AppRouter;
