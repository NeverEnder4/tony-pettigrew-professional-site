import Link from 'next/link';

import PageWrapper from '../components/PageWrapper/PageWrapper';

import '../scss/pages/index.scss';

const index = () => (
  <PageWrapper>
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
    <div className="landing-lower-half">
      <span className="vertical-line" />
      <ul className="landing-nav">
        <li className="landing-nav-item">
          <Link prefetch href="/biographique">
            <a>biographique</a>
          </Link>
        </li>
        <li className="landing-nav-item">
          <Link prefetch href="/works">
            <a>works</a>
          </Link>
        </li>
        <li className="landing-nav-item">
          <Link prefetch href="/thoughts">
            <a>thoughts</a>
          </Link>
        </li>
        <li className="landing-nav-item">
          <Link prefetch href="mailto:apettigrew.wsdev@gmail.com">
            <a>tacoboutit</a>
          </Link>
        </li>
      </ul>
    </div>
  </PageWrapper>
);

export default index;
