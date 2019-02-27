import Link from 'next/link';

import HighLightLink from '../../components/HighLightLink/HighLightLink';

import './LandingPageContent.scss';

const LandingPageContent = () => (
  <React.Fragment>
    <div className="headline-scaffold">
      <div className="headline-row">
        <h1 className="headline">I build</h1>
      </div>
      <div className="headline-row">
        <h1 className="headline">websites</h1>
      </div>
      <div className="headline-row last">
        <h1 className="headline">that</h1>
        <img
          className="logo"
          src="/static/svg/champagne-logo.svg"
          alt="champagne bottle logo"
        />
      </div>
    </div>
    <div className="landing-lower-section">
      <div className="vertical-line">
        <nav className="landing-nav">
          <ul>
            <li className="landing-nav-item">
              <Link href="/biographique">
                <a>biographique</a>
              </Link>
            </li>
            <li className="landing-nav-item">
              <Link href="/works">
                <a>works</a>
              </Link>
            </li>
            <li className="landing-nav-item">
              <Link href="/thoughts">
                <a>thoughts</a>
              </Link>
            </li>
            <li className="landing-nav-item">
              <Link href="mailto:apettigrew.wsdev@gmail.com">
                <a>tacoboutit</a>
              </Link>
            </li>
          </ul>
        </nav>

        <span>Pull Me</span>
        <img
          className="sphere-icon"
          src="/static/svg/sphere.svg"
          alt="sphere"
        />
      </div>
    </div>
    <footer className="social-links">
      <HighLightLink href="#" text="Linkedin" />
      <HighLightLink href="#" text="Github" />
      <HighLightLink href="#" text="Twitter" />
    </footer>
  </React.Fragment>
);

export default LandingPageContent;
