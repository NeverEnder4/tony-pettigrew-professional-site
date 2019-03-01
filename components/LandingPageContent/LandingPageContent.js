import Link from 'next/link';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import HighLightLink from '../../components/HighLightLink/HighLightLink';
import HeadlineIcon from './HeadlineIcon/HeadlineIcon';
import './LandingPageContent.scss';
import './HeadlineIcon/icon-transition.css';

class LandingPageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIconIndex: 0,
      mouseDownOnSphere: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.cycleNextIcon();
    }, 4000);
  }

  // Loop the index back to 0 if it is the terminal index
  loopIndex(arrayLength, index) {
    if (index === arrayLength - 1) return 0;
    else return ++index;
  }

  cycleNextIcon = () => {
    let { currentIconIndex } = this.state;
    const { iconArray } = this.props;
    const iconArrayLength = iconArray.length;
    currentIconIndex = this.loopIndex(iconArrayLength, currentIconIndex);

    this.setState(() => ({
      currentIconIndex: currentIconIndex,
    }));
  };

  onSphereMouseDownHandler = e => {
    if (!e.target.classList.contains('sphere-icon')) return;
    this.setState(prevState => ({
      mouseDownOnSphere: !prevState.mouseDownOnSphere,
    }));
  };

  onSphereMouseUpHandler = e => {
    if (!this.state.mouseDownOnSphere) return;

    this.setState(prevState => ({
      mouseDownOnSphere: !prevState.mouseDownOnSphere,
    }));
  };
  render() {
    const { iconArray } = this.props;
    const { currentIconIndex, mouseDownOnSphere } = this.state;
    const icon = iconArray[currentIconIndex];
    const mouseDownOnSphereClass = mouseDownOnSphere ? 'mouse-down' : '';
    return (
      <React.Fragment>
        <div className="headline-scaffold">
          <div className="headline-row">
            <h1 className="headline">I build</h1>
          </div>
          <div className="headline-row">
            <h1 className="headline">websites</h1>
          </div>
          <div className="headline-row last">
            <h1 className="headline">that</h1>
            <TransitionGroup className="icon">
              <CSSTransition timeout={200} classNames="slide-in" key={icon.src}>
                <HeadlineIcon
                  key={icon.src}
                  src={icon.src}
                  alt={icon.alt}
                  classes={`${icon.class} icon`}
                />
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
        <div
          onMouseUp={this.onSphereMouseUpHandler}
          className="landing-lower-section"
        >
          <div
            onMouseDown={this.onSphereMouseDownHandler}
            className={`${mouseDownOnSphereClass} vertical-line`}
          >
            <nav className="landing-nav">
              <ul>
                <li className="landing-nav-item">
                  <Link href="/biographique">
                    <a>biographique</a>
                  </Link>
                </li>
                <li className="landing-nav-item">
                  <Link href="/works">
                    <a>works</a>
                  </Link>
                </li>
                <li className="landing-nav-item">
                  <Link href="/thoughts">
                    <a>thoughts</a>
                  </Link>
                </li>
                <li className="landing-nav-item">
                  <Link href="mailto:apettigrew.wsdev@gmail.com">
                    <a>tacoboutit</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <span>Pull Me</span>
            <img
              onClick={this.onSphereClickHandler}
              src="/static/svg/sphere.svg"
              alt="sphere"
              className="sphere-icon"
            />
          </div>
        </div>
        <footer className="social-links">
          <HighLightLink href="#" text="Linkedin" />
          <HighLightLink href="#" text="Github" />
          <HighLightLink href="#" text="Twitter" />
        </footer>
      </React.Fragment>
    );
  }
}

export default LandingPageContent;
