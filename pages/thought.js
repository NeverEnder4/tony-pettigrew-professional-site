import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout/Layout';
import ThoughtPost from '../components/ThoughtPost/ThoughtPost';

import api from '../api/api';

const thought = ({ thought, currPage }) => {
  return (
    <Layout currPage={currPage}>
      <ThoughtPost thought={thought} />
    </Layout>
  );
};

thought.getInitialProps = async ({ query, pathname }) => {
  const { slug } = query;
  const currPage = `${pathname}s`;
  const response = await api.getData(
    `http://localhost:3000/post/${slug}`,
    fetch,
  );

  return {
    currPage: currPage,
    thought: response.thoughts[0],
  };
};

export default thought;
