import './Footer.scss';

const Footer = ({ contactClickHandler, contactOpen }) => {
  const activeClass = contactOpen ? 'active' : '';
  return (
    <footer className={`footer ${activeClass}`}>
      <a className="contacts-button" onClick={contactClickHandler}>
        <span>Get</span>
        <img src="/static/svg/email.svg" alt="at symbol" />
        <span>me!</span>
      </a>
      <ul className="contact-links">
        <li>
          <a href="" className="contact-link">
            <img
              src="/static/svg/github.svg"
              alt="github icon"
              className="contact-icon"
            />
          </a>
        </li>
        <li>
          <a href="" className="contact-link">
            <img
              src="/static/svg/linkedin.svg"
              alt="linkedin icon"
              className="contact-icon"
            />
          </a>
        </li>
        <li>
          <a href="" className="contact-link">
            <img
              src="/static/svg/twitter.svg"
              alt="twitter icon"
              className="contact-icon"
            />
          </a>
        </li>
        <li>
          <a href="" className="contact-link">
            <img
              src="/static/svg/mail.svg"
              alt="email icon"
              className="contact-icon email"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
