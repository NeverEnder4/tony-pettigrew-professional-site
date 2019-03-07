import ThoughtsItem from './ThoughtsItem/ThoughtsItem';
import ThoughtsIcon from './ThoughtsIcon/ThoughtsIcon';

import './ThoughtsList.scss';

import thoughtsArray from '../../static/seed-data/thoughts';

const ThoughtsList = ({ footerComponent, thoughts }) => {
  return (
    <section className="thoughts-list-content">
      <div className="section-title">
        <span className="white-bar">
          <h1>Thoughts</h1>
          <ThoughtsIcon />
        </span>
      </div>
      <ul className="thoughts-list">
        {thoughts
          ? thoughts.map(thought => <ThoughtsItem thought={thought} />)
          : 'Loading...'}
      </ul>
      {footerComponent}
    </section>
  );
};

export default ThoughtsList;
