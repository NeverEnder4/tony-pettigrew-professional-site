import Link from 'next/link';

import MenuLogoContainer from './MenuLogoContainer/MenuLogoContainer';

import pageList from '../../../static/seed-data/pageList';

import './Menu.scss';

const Menu = ({ currPage, isOpen, fullScreenMenu }) => {
  const activeClass = isOpen ? 'active' : '';

  return (
    <React.Fragment>
      <div className={`screen-cover ${activeClass}`} />
      <div className={`menu ${activeClass}`}>
        <div className="menu-content">
          <Link href="/">
            <a>
              <MenuLogoContainer
                menuOpen={isOpen}
                fullScreenMenu={fullScreenMenu}
              />
            </a>
          </Link>
          <nav className="nav-menu">
            <ul className={`${activeClass}`}>
              {pageList.map(page => {
                if (page.type === 'navigation') {
                  return currPage === page.href ? (
                    <li className="current-page" key={page.name}>
                      <img
                        className={`${activeClass}`}
                        src="/static/svg/chevron-right.svg"
                        alt="right arrow icon"
                      />
                      <Link href={page.href}>
                        <a className={`nav-link ${activeClass}`}>{page.name}</a>
                      </Link>
                    </li>
                  ) : (
                    <li key={page.name}>
                      <Link href={page.href}>
                        <a className="nav-link">{page.name}</a>
                      </Link>
                    </li>
                  );
                } else
                  return (
                    <li key={page.name}>
                      <a href={page.href} className="nav-link">
                        {page.name}
                      </a>
                    </li>
                  );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
