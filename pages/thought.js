import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout/Layout';
import ThoughtPost from '../components/ThoughtPost/ThoughtPost';

import api from '../api/api';

import '../scss/pages/thought.scss';

const thought = ({ thought }) => {
  return (
    <Layout>
      <ThoughtPost thought={thought} />
    </Layout>
  );
};

thought.getInitialProps = async ({ query }) => {
  const { slug } = query;

  const response = await api.getData(
    `http://localhost:3000/post/${slug}`,
    fetch,
  );
  return {
    thought: response,
  };
};

export default thought;
