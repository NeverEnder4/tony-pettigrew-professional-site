import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout/Layout';
import WorksList from '../components/WorksList/WorksList';

import api from '../api/api';

import '../scss/pages/works.scss';

const works = ({ currPage, works }) => (
  <Layout currPage={currPage}>
    <WorksList works={works} />
  </Layout>
);

works.getInitialProps = async ({ pathname }) => {
  const results = await api.getData(
    'http://localhost:3000/portfolio/all',
    fetch,
  );

  return { currPage: pathname, works: results.data.works };
};

export default works;
