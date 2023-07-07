import './Header.scss';

import logo from '../../assets/Logo.svg';
import { useScroll } from '../../hooks/useScroll';
import Button from '../Button';

const scrollToSection = useScroll();

const Header = () => (
  <div className="container">
    <div className="header">
      <a href="/" className="header__logo">
        <img src={logo} alt="logo" />
      </a>
      <div className="header__nav">
        <Button name="Users" type="button" onClick={() => scrollToSection('users')} />
        <Button name="Sign up" type="button" onClick={() => scrollToSection('form')} />
      </div>
    </div>
  </div>
);

export default Header;
