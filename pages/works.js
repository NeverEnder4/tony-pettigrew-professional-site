import Layout from '../components/Layout/Layout';
import WorksList from '../components/WorksList/WorksList';

import '../scss/pages/works.scss';

const works = ({ currPage }) => (
  <Layout currPage={currPage}>
    <WorksList />
  </Layout>
);

works.getInitialProps = ({ pathname }) => ({ currPage: pathname });

export default works;
