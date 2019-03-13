import WorksItem from './WorksItem/WorksItem';

// import itemsArray from '../../static/seed-data/works';

import './WorksList.scss';

const WorksList = ({ footerComponent, works }) => (
  <React.Fragment>
    <section className="works-list">
      <div className="works-container">
        <span className="title-offset">
          <h1 className="works-title">WORKS</h1>
        </span>
        <ul className="works-gallery">
          {works.map(item => (
            <WorksItem key={item.name} item={item} />
          ))}
        </ul>
      </div>
      {footerComponent}
    </section>
  </React.Fragment>
);

export default WorksList;
