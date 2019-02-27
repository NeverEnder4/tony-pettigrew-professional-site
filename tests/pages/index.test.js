import renderer from 'react-test-renderer';
import Index from '../../pages/index';

it('renders and matches snapshot', () => {
  expect(renderer.create(<Index />).toJSON()).toMatchSnapshot();
});
