import '../styles/App.scss';
import { Fragment } from 'react';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navigation />
      <Component {...pageProps} />
      <script src={process.env.FONT_AWESOME_KIT_URL}></script>
    </Fragment>
  );
}

export default MyApp;
