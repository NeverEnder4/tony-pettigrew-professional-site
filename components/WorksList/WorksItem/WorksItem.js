import { Waypoint } from 'react-waypoint';

import './WorksItem.scss';

class WorksItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemEntered: false,
    };
  }

  enterHandler = () => {
    this.setState(() => ({ itemEntered: true }));
  };
  render() {
    const { item } = this.props;
    const { itemEntered } = this.state;
    const enteredClass = itemEntered ? 'entered' : '';
    return (
      <Waypoint onEnter={this.enterHandler} bottomOffset="55%">
        <li className={`works-gallery-item ${enteredClass}`}>
          <img className="item-image" src={item.img_src} alt={item.img_alt} />
          <div className="text-content">
            {item.link ? (
              <a
                className="item-link"
                href={item.link}
                rel="noreferrer"
                target="_blank"
              >
                <h2 className="item-title">{item.name}</h2>

                <img
                  src="/static/svg/open-new-window.svg"
                  alt="open link in a new window"
                  className="new-window"
                />
              </a>
            ) : (
              <h2 className="item-title">{item.name}</h2>
            )}

            <div className="item-info">
              <div className="stats">
                <h3 className="item-type">{item.type}</h3>
                <p className="item-tech">{item.tech}</p>
              </div>
              <div className="item-description">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </li>
      </Waypoint>
    );
  }
}

export default WorksItem;
