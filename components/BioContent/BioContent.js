import Link from 'next/link';

import './BioContent.scss';

const BioContent = ({ footerComponent }) => (
  <section className="bio-content">
    <div className="section-title">
      <span className="section-title-bar">
        <h1 className="section-title-name">biographique</h1>
      </span>
    </div>
    <p className="bio-paragraph">
      <span className="greeting">Hi,</span> my name is{' '}
      <span className="emphasized-text">Tony Pettigrew</span> I'm a web
      developer specializing in full stack{' '}
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
    {footerComponent}
  </section>
);

export default BioContent;
