import renderer from 'react-test-renderer';
import LandingPageContent from './LandingPageContent';

it('renders and matches the current snapshot', () => {
  expect(renderer.create(<LandingPageContent />).toJSON()).toMatchSnapshot();
});
