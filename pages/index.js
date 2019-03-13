import NextHead from '../components/NextHead/NextHead';
import LandingNav from '../components/LandingNav/LandingNav';
import LandingHeader from '../components/LandingHeader/LandingHeader';
// seed data from static folder
import '../scss/pages/index.scss';

const index = () => (
  <React.Fragment>
    <NextHead />
    <main className="landing-page-wrapper">
      <LandingHeader />
      <LandingNav />
    </main>
  </React.Fragment>
);

export default index;
