import './ContentWrapper.scss';

const ContentWrapper = ({ children, footerComponent }) => {
  const componentWithFooter = React.Children.map(children, child => {
    return React.cloneElement(child, { footerComponent });
  });
  return <main className="main-content">{componentWithFooter}</main>;
};

export default ContentWrapper;
