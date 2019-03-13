import ThoughtsItem from './ThoughtsItem/ThoughtsItem';
import ThoughtsIcon from './ThoughtsIcon/ThoughtsIcon';

import './ThoughtsList.scss';

const ThoughtsList = ({ footerComponent, thoughts }) => {
  return (
    <section className="thoughts-list-content">
      <div className="section-title thoughts">
        <span className="section-title-bar">
          <h1 className="section-title-name">thoughts</h1>
        </span>
      </div>
      <ul className="thoughts-list">
        {thoughts
          ? thoughts.map(thought => {
              return <ThoughtsItem key={thought.slug} thought={thought} />;
            })
          : 'Loading...'}
      </ul>
    </section>
  );
};

export default ThoughtsList;
