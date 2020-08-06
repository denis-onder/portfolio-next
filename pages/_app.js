import '../styles/App.scss';
import Navigation from '../components/Navigation';
import NavigationModal from '../components/NavigationModal';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="root_wrapper">
        <Navigation />
        <NavigationModal />
        <Component {...pageProps} />
        <script src={process.env.FONT_AWESOME_KIT_URL}></script>
      </div>
    </>
  );
}

export default MyApp;
