import './ThoughtsItem.scss';

const ThoughtsItem = ({ thought }) => {
  return (
    <li className="thoughts-item">
      <a className="title" href="#">
        <h2>{thought.title}</h2>
        <span />
        <div className="meta-data">
          <h3>{thought.date}</h3>
          <h4 className="tag">{thought.tag}</h4>
        </div>
      </a>
      <p>{thought.description}</p>
    </li>
  );
};

export default ThoughtsItem;
