import Layout from '../components/Layout/Layout';
import ThoughtsList from '../components/ThoughtsList/ThoughtsList';

import '../scss/pages/thoughts.scss';

const thoughts = ({ currPage }) => (
  <Layout currPage={currPage}>
    <ThoughtsList />
  </Layout>
);

thoughts.getInitialProps = ({ pathname }) => ({
  currPage: pathname,
});

export default thoughts;
