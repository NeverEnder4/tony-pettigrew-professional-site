import Link from 'next/link';
import MenuIcon from './MenuIcon/MenuIcon';
import './Header.scss';

const Header = ({ menuOpen }) => (
  <header className="header">
    <Link href="/">
      <a className="home-link">home</a>
    </Link>
    <span className="divider" />
    <MenuIcon isActive={menuOpen} />
  </header>
);

export default Header;
