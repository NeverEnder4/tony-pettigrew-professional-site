import './LandingHeader.scss';

const LandingHeader = () => (
  <header className="landing-header">
    <h1 className="landing-header__title">
      I build{` `}
      <span className="landing-header__title--weight-black">websites</span>
      {` `}that
    </h1>
    <img
      className="landing-header__icon"
      src="/static/svg/champagne-logo-lg.svg"
      alt="champagne bottle popping icon"
    />
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
