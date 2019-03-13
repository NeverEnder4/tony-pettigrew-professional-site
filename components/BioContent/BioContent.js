import Link from 'next/link';

import './BioContent.scss';

const BioContent = ({ footerComponent }) => (
  <div className="bio-page">
    <div className="bio-content-container">
      <section className="bio-content">
        <div className="section-title">
          <span className="section-title-bar">
            <h1 className="section-title-name">biographique</h1>
          </span>
        </div>
        <span className="greeting">Hello</span>

        <p className="bio-paragraph">
          my <span className="">name</span> is{' '}
          <span className="emphasized-text">Tony Pettigrew</span> I'm a{' '}
          <span className="">web developer</span> specializing in full stack{' '}
          <span className="emphasized-text">JavaScript</span>
        </p>
        <p className="bio-paragraph">
          When I'm not developing, I'm creating music playlists or making space
          noises on my <span className="emphasized-text">Roland Juno 60</span>
        </p>
        <p className="bio-paragraph">
          Feel free to peruse my{' '}
          <Link href="/works">
            <a className="white-link">work</a>
          </Link>{' '}
          or take a gander at my web development{' '}
          <Link href="/thoughts">
            <a className="white-link">blog</a>
          </Link>
        </p>
      </section>
    </div>
    {footerComponent}
  </div>
);

export default BioContent;
