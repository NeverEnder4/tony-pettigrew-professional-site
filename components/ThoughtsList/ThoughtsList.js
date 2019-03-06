import ThoughtsItem from './ThoughtsItem/ThoughtsItem';

import './ThoughtsList.scss';

import thoughtsArray from '../../static/seed-data/thoughts';

const ThoughtsList = ({ footerComponent }) => (
  <section className="thoughts-list-content">
    <div className="title">
      <span className="white-bar">
        <h1>Thoughts</h1>
        <img
          src="/static/svg/brain.svg"
          alt="brain with lightning bolts shooting out of the top"
        />
      </span>
    </div>
    <ul className="thoughts-list">
      {thoughtsArray.map(thought => (
        <ThoughtsItem key={thought.title} thought={thought} />
      ))}
    </ul>
    {footerComponent}
  </section>
);

export default ThoughtsList;
