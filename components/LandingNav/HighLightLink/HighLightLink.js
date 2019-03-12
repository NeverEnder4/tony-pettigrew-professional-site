import Link from 'next/link';
import './HighLightLink.scss';

const HighLightLink = ({ href, text }) => (
  <Link href={href}>
    <a className="high-light-link">{text}</a>
  </Link>
);

export default HighLightLink;
