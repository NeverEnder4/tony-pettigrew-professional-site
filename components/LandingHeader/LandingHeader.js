import HeaderIcon from './HeaderIcon/HeaderIcon';

import './LandingHeader.scss';

const LandingHeader = () => (
  <header className="landing-header">
    <h1 className="landing-header__title">
      I build{` `}
      <span className="landing-header__title--weight-black">websites</span>
      {` `}that
    </h1>

    <HeaderIcon />

    <ul className="landing-header__social-links-container">
      <li>
        <a href="#">Git</a>
      </li>
      <li>
        <a href="#">Twit</a>
      </li>
      <li>
        <a href="#">Link</a>
      </li>
    </ul>
  </header>
);

export default LandingHeader;
