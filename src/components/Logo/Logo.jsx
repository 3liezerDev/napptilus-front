import { Link } from 'react-router-dom';
import './Logo.scss'


export const Logo = () => {
  return (
    <Link to="/">
    <img src="/mbst.svg" alt="Logo" className="logo" />
    </Link>
  )
}

