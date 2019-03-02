import Link from 'next/link';

import './Header.scss';

const Header = () => (
  <header className="header">
    <Link href="/">
      <a className="home-link">home</a>
    </Link>
    <span className="divider" />
    <img
      src="/static/svg/sphere-icon.svg"
      alt="menu icon"
      className="menu-icon"
    />
  </header>
);

export default Header;
