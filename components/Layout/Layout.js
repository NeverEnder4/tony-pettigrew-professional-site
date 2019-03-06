import Header from './Header/Header';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import ContentWrapper from './ContentWrapper/ContentWrapper';

import './Layout.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      innerWidth: 0,
    };
    this._windowResizeHandler = e => {
      const innerWidth = e.target.innerWidth;
      this.setState(() => ({
        innerWidth,
      }));
      this.adjustMenuAtWidth(this.state.innerWidth);
    };
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      this.debounce(this._windowResizeHandler, 25),
    );
    this.adjustMenuAtWidth(window.innerWidth);
  }

  adjustMenuAtWidth = width => {
    const { menuOpen } = this.state;
    if (width >= 1200 && !menuOpen) {
      this.setState(prevState => ({
        menuOpen: !prevState.menuOpen,
      }));
    }

    if (width < 1200 && menuOpen) {
      this.setState(prevState => ({
        menuOpen: !prevState.menuOpen,
      }));
    }
  };

  debounce = (fn, time) => {
    let timeout;

    return function() {
      const functionCall = () => fn.apply(this, arguments);
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  };

  menuButtonClickHandler = e => {
    if (e.target.classList.contains('screen-cover') && this.state.menuOpen) {
      this.setState(prevState => ({
        menuOpen: !prevState.menuOpen,
      }));
    }

    if (e.target.classList.contains('menu-icon')) {
      this.setState(prevState => ({
        menuOpen: !prevState.menuOpen,
      }));
    }
  };

  render() {
    const { menuOpen } = this.state;
    const { children, currPage } = this.props;
    const footerComponent = <Footer />;
    return (
      <div className="layout" onClick={this.menuButtonClickHandler}>
        <Header
          menuOpen={menuOpen}
          menuButtonClickHandler={this.menuButtonClickHandler}
        />
        <ContentWrapper footerComponent={footerComponent}>
          {children}
        </ContentWrapper>
        <Menu currPage={currPage} isOpen={menuOpen} />
      </div>
    );
  }
}

export default Layout;
