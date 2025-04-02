import { Logo } from '../Logo/Logo';
import CartItem from "@/features/cart/components/CartItem";
import './Navbar.scss';

export const Navbar = () => {
  
  return (
    <nav className="navbar">
      <Logo />
      <CartItem />
    </nav>
  );
};
