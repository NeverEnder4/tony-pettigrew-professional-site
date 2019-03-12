import NextHead from '../components/NextHead/NextHead';
import LandingNav from '../components/LandingNav/LandingNav';
import LandingHeader from '../components/LandingHeader/LandingHeader';
// seed data from static folder
import iconArray from '../static/seed-data/icons';

import '../scss/pages/index.scss';

// default state object
const defaultState = {
  currentIconIndex: 0,
};

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  // componentDidMount() {
  //   this.cycleIconsAtInterval(4000, iconArray);
  // }

  // loop the index back to 0 if it is the terminal index
  // loopIndex(array, index) {
  //   // validate arguments
  //   const arrayLength = array.length;
  //   if (typeof arrayLength !== 'number' || typeof index !== 'number') return;
  //   if (index >= arrayLength) return;

  //   if (index === arrayLength - 1) return 0;
  //   else return ++index;
  // }

  // cycle through all the icons with a delay of interval
  // cycleIconsAtInterval = (interval, array) => {
  //   // validate args
  //   if (!interval || !array) return undefined;
  //   if (typeof interval !== 'number') return NaN;
  //   setInterval(() => {
  //     const { currentIconIndex } = this.state;
  //     const nextIconIndex = this.loopIndex(array, currentIconIndex);
  //     this.setState(() => ({
  //       currentIconIndex: nextIconIndex,
  //     }));
  //   }, interval);
  // };

  render() {
    // const { currentIconIndex } = this.state;
    // const icon = iconArray[currentIconIndex];
    return (
      <React.Fragment>
        <NextHead />
        <main className="landing-page-wrapper">
          <LandingHeader />
          <LandingNav />
        </main>
      </React.Fragment>
    );
  }
}

export default index;
