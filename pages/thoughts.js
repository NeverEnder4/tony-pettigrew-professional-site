import fetch from 'isomorphic-unfetch';
import Error from 'next/error';

import Layout from '../components/Layout/Layout';
import ThoughtsList from '../components/ThoughtsList/ThoughtsList';

import api from '../api/api';

import '../scss/pages/thoughts.scss';

const thoughts = ({ currPage, thoughts }) => {
  return (
    <Layout currPage={currPage}>
      <ThoughtsList thoughts={thoughts} />
    </Layout>
  );
};

thoughts.getInitialProps = async ({ pathname }) => {
  const response = await api.getData('http://localhost:3000/posts/all', fetch);
  return {
    currPage: pathname,
    thoughts: response.data.thoughts,
  };
};

export default thoughts;
