import WorksItem from './WorksItem/WorksItem';

import itemsArray from '../../static/seed-data/works';

import './WorksList.scss';

const WorksList = ({ footerComponent }) => (
  <section className="works-list">
    <div className="works-container">
      <span className="title-offset">
        <h1 className="works-title">WORKS</h1>
      </span>
      <ul className="works-gallery">
        {itemsArray.map(item => (
          <WorksItem item={item} />
        ))}
      </ul>
    </div>

    {footerComponent}
  </section>
);

export default WorksList;
