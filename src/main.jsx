import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </BrowserRouter>,
)
