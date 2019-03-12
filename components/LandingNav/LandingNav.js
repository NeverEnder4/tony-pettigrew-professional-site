import HighLightLink from './HighLightLink/HighLightLink';
import './LandingNav.scss';

const LandingNav = () => (
  <nav className="landing-nav">
    <ul className="landing-nav__list">
      <li className="landing-nav__item about">
        <HighLightLink href="/biographique" text="About Me" />
      </li>
      <li className="landing-nav__item works">
        <HighLightLink href="/works" text="Works" />
      </li>
      <li className="landing-nav__item thoughts">
        <HighLightLink href="/thoughts" text="Thoughts" />
      </li>
      <li className="landing-nav__item tacoboutit">
        <HighLightLink
          href="mailto:apettigrew.wsdev@gmail.com"
          text="Tacoboutit"
        />
      </li>
    </ul>
  </nav>
);

export default LandingNav;
