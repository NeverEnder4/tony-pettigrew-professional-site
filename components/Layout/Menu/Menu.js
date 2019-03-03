import Link from 'next/link';

import './Menu.scss';

const Menu = ({ isOpen }) => {
  const activeClass = isOpen ? 'active' : '';
  return (
    <React.Fragment>
      <div className={`screen-cover ${activeClass}`} />
      <div className={`menu ${activeClass}`}>
        <Link href="/">
          <a>
            <img
              src="/static/svg/menu-logo.svg"
              alt="T P"
              className="menu-logo"
            />
          </a>
        </Link>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link href="/biographique">
                <a className="nav-link">Biographique</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a className="nav-link">Works</a>
              </Link>
            </li>
            <li>
              <Link href="/thoughts">
                <a href="/thoughts" className="nav-link">
                  Thoughts
                </a>
              </Link>
            </li>
            <li>
              <a href="mailto:apettigrew.wsdev@gmail.com" className="nav-link">
                Tacoboutit
              </a>
            </li>
          </ul>
        </nav>
        <img
          src="/static/svg/sphere-red-black.svg"
          alt="red and black sphere"
          className="sphere-red-black"
        />
      </div>
    </React.Fragment>
  );
};

export default Menu;
