import PageWrapper from '../components/PageWrapper/PageWrapper';
import Headline from '../components/Headline/Headline';
import LowerLanding from '../components/LowerLanding/LowerLanding';

// seed data from static folder
import iconArray from '../static/seed-data/icons';

// default state object
const defaultState = {
  currentIconIndex: 0,
  mouseDownOnSphere: false,
};

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  componentDidMount() {
    this.cycleIconsAtInterval(4000, iconArray);
  }

  componentWillUnmount() {
    clearInterval(this.cycleIconsAtInterval);
  }

  // loop the index back to 0 if it is the terminal index
  loopIndex(array, index) {
    // validate arguments
    const arrayLength = array.length;
    if (typeof arrayLength !== 'number' || typeof index !== 'number') return;
    if (index >= arrayLength) return;

    if (index === arrayLength - 1) return 0;
    else return ++index;
  }

  // cycle through all the icons with a delay of interval
  cycleIconsAtInterval = (interval, array) => {
    // validate args
    if (!interval || !array) return undefined;
    if (typeof interval !== 'number') return NaN;
    setInterval(() => {
      const { currentIconIndex } = this.state;
      const nextIconIndex = this.loopIndex(array, currentIconIndex);
      this.setState(() => ({
        currentIconIndex: nextIconIndex,
      }));
    }, interval);
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
    const { currentIconIndex, mouseDownOnSphere } = this.state;
    const icon = iconArray[currentIconIndex];
    const mouseDownOnSphereClass = mouseDownOnSphere ? 'mouse-down' : '';
    return (
      <PageWrapper>
        <Headline icon={icon} />
        <LowerLanding
          onSphereMouseDownHandler={this.onSphereMouseDownHandler}
          onSphereMouseUpHandler={this.onSphereMouseUpHandler}
          mouseDownOnSphereClass={mouseDownOnSphereClass}
        />
      </PageWrapper>
    );
  }
}

export default index;
