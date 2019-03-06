import Layout from '../components/Layout/Layout';
import BioContent from '../components/BioContent/BioContent';

import '../scss/global/_global.scss';
import '../scss/pages/biographique.scss';

const biographique = ({ currPage }) => {
  console.log(currPage);
  return (
    <Layout currPage={currPage}>
      <BioContent />
    </Layout>
  );
};

biographique.getInitialProps = ({ pathname }) => ({ currPage: pathname });

export default biographique;
