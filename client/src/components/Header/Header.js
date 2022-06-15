import logo from './logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={logo} alt='Wild Code School logo' />
      <h1>Les Argonautes</h1>
    </header>
  );
};

export default Header;
