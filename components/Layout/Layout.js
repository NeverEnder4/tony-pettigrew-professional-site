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
    };
  }

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
    const { children } = this.props;
    return (
      <div className="layout" onClick={this.menuButtonClickHandler}>
        <Header menuButtonClickHandler={this.menuButtonClickHandler} />
        <ContentWrapper>{children}</ContentWrapper>
        <Menu isOpen={menuOpen} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
