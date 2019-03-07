import Link from 'next/link';

import './ThoughtsItem.scss';

const ThoughtsItem = ({ thought }) => {
  return (
    <li className="thoughts-item">
      <Link
        href={`/thought?slug=${thought.slug}`}
        // as={`thoughts/${thought.slug}`}
      >
        <a className="title">
          <h2>{thought.title}</h2>
          <span />
          <div className="meta-data">
            <h3>{thought.date}</h3>
            <h4 className="tag">{thought.tag}</h4>
          </div>
        </a>
      </Link>
      <p>{thought.description}</p>
    </li>
  );
};

export default ThoughtsItem;
