import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HighLightLink from './HighLightLink';

describe('HighLightLink component', () => {
  it('renders props', () => {
    const wrapper = shallow(<HighLightLink href="/href" text="text" />);
    expect(wrapper.props().href).toBe('/href');
    expect(wrapper.props().children).toBe('text');
  });
  it('renders props and matches snapshot', () => {
    expect(
      renderer.create(<HighLightLink href="/href" text="text" />).toJSON(),
    ).toMatchSnapshot();
  });
});
