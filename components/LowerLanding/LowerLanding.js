import Link from 'next/link';

import HighLightLink from './HighLightLink/HighLightLink';

import './LowerLanding.scss';

const LowerLanding = ({
  onSphereMouseDownHandler,
  onSphereMouseUpHandler,
  mouseDownOnSphereClass,
}) => (
  <React.Fragment>
    <div
      onMouseUp={onSphereMouseUpHandler}
      onTouchEnd={onSphereMouseUpHandler}
      className="landing-lower-section"
    >
      <div
        onMouseDown={onSphereMouseDownHandler}
        onTouchStart={onSphereMouseDownHandler}
        className={`${mouseDownOnSphereClass} vertical-line`}
      >
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
          src="/static/svg/sphere.svg"
          alt="sphere"
          className="sphere-icon"
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

export default LowerLanding;
