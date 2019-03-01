import LandingPageContent from '../components/LandingPageContent/LandingPageContent';
import PageWrapper from '../components/PageWrapper/PageWrapper';

import '../scss/pages/index.scss';

const iconArray = [
  {
    src: '/static/svg/champagne.svg',
    alt: 'champagne bottle icon',
    class: 'champagne',
  },
  {
    src: '/static/svg/smiley-face.svg',
    alt: 'smiley face icon',
    class: 'smiley-face',
  },
  {
    src: '/static/svg/rocket.svg',
    alt: 'rocket icon',
    class: 'rocket',
  },
  {
    src: '/static/svg/sapling.svg',
    alt: 'sapling icon',
    class: 'sapling',
  },
  {
    src: '/static/svg/graph.svg',
    alt: 'graph icon',
    class: 'graph',
  },
];

const index = () => (
  <PageWrapper>
    <LandingPageContent iconArray={iconArray} />
  </PageWrapper>
);

export default index;
