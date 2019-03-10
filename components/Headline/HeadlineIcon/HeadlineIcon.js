import './HeadlineIcon.scss';
import './icon-transition.css';

const HeadlineIcon = ({ src, alt, classes }) => (
  <img src={src} alt={alt} className={classes} />
);

export default HeadlineIcon;
