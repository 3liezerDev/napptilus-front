import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/contexts/CartContext";

import "./styles/global.scss";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
