import Head from 'next/head';

import './PageWrapper.scss';

const PageWrapper = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <title>
          Tony Pettigrew | Web Developer | UX/UI Designer | Creative Solutions
          Expert
        </title>
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:400,500,700,900"
          rel="stylesheet"
        />
      </Head>
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default PageWrapper;
