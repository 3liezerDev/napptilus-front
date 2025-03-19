
import { Logo } from '../Logo/Logo';
import './Navbar.scss'

export const Navbar = () => {
  return (
    <nav className="navbar">
      
        <Logo />

        {/* Icono del carrito con contador */}
        <div className="cart">
          <img src="/bag-icon.svg" alt="Carrito" className="cart-icon" />
          <span className="cart-count">0</span>
        </div>

    </nav>
  );
};


