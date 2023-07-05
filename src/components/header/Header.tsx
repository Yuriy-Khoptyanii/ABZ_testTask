import './Header.scss';

import logo from '../../assets/Logo.svg';
import { Button } from '../button/Button';

function Header() {
  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" />
        <div className="header__nav">
          <Button name={'Users'} sectionId={'users'} />
          <Button name={'Sign up'} sectionId={'form'} />
        </div>
      </div>
    </div>
  );
}

export default Header;
