import './HighLightLink.scss';

const HighLightLink = ({ href, text }) => (
  <a href={href} rel="noreferrer" className="high-light-link">
    {text}
  </a>
);

export default HighLightLink;
