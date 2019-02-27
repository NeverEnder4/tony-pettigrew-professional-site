import renderer from 'react-test-renderer';
import PageWrapper from './PageWrapper';

it('renders children', () => {
  expect(
    renderer
      .create(
        <PageWrapper>
          <div>Test</div>
        </PageWrapper>,
      )
      .toJSON(),
  ).toMatchSnapshot();
});
