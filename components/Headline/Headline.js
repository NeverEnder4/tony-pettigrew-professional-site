import HeadlineIcon from './HeadlineIcon/HeadlineIcon';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './Headline.scss';

const Headline = ({ icon }) => (
  <div className="headline-scaffold">
    <div className="headline-row">
      <h1 className="headline">I build</h1>
    </div>
    <div className="headline-row">
      <h1 className="headline">websites</h1>
    </div>
    <div className="headline-row last">
      <h1 className="headline">that</h1>
      <TransitionGroup className="icon">
        <CSSTransition timeout={200} classNames="slide-in" key={icon.src}>
          <HeadlineIcon
            key={icon.src}
            src={icon.src}
            alt={icon.alt}
            classes={`${icon.class} icon`}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  </div>
);

export default Headline;
