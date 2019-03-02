import Header from './Header/Header';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import ContentWrapper from './ContentWrapper/ContentWrapper';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
        <Menu />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
