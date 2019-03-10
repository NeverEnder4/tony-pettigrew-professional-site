import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout/Layout';
import ThoughtsList from '../components/ThoughtsList/ThoughtsList';

import api from '../api/api';
import { sortThoughtsByDate } from '../utils/utils';

const thoughts = ({ currPage, thoughts }) => {
  return (
    <Layout currPage={currPage}>
      <ThoughtsList thoughts={thoughts} />
    </Layout>
  );
};

thoughts.getInitialProps = async ({ pathname }) => {
  const response = await api.getData('http://localhost:3000/posts/all', fetch);

  const sortedThoughts = sortThoughtsByDate(response.data.thoughts);
  return {
    currPage: pathname,
    thoughts: sortedThoughts,
  };
};

export default thoughts;
