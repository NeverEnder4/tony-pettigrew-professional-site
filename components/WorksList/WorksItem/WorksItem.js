import './WorksItem.scss';

const WorksItem = ({ item }) => (
  <li className="works-gallery-item">
    <img className="item-image" src={item.imgUrl} alt={item.imgAlt} />
    <div className="text-content">
      {item.link ? (
        <a
          className="item-link"
          href={item.href}
          rel="noreferrer"
          target="_blank"
        >
          <h2 className="item-title">{item.title}</h2>

          <img
            src="/static/svg/open-new-window.svg"
            alt="open link in a new window"
            className="new-window"
          />
        </a>
      ) : (
        <h2 className="item-title">{item.title}</h2>
      )}

      <div className="item-info">
        <div className="stats">
          <h3 className="item-type">{item.style}</h3>
          <p className="item-tech">{item.tech}</p>
        </div>
        <div className="item-description">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  </li>
);

export default WorksItem;