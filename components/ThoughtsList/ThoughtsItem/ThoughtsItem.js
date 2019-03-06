import './ThoughtsItem.scss';

const ThoughtsItem = ({ thought }) => (
  <li className="thoughts-item">
    <a className="title" href="#">
      <h2>{thought.title}</h2>
      <span />
      <h3>{thought.date}</h3>
    </a>
    <p>
      {thought.description}
      {/* <a className="tag-link" href="#">
        React
      </a> */}
    </p>
  </li>
);

export default ThoughtsItem;
