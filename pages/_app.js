// import '../styles/globals.css'
import '../assets/css/main.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  //Integrate with LogRocket
  require('../devTools/logrocket');

  return <Component {...pageProps} />;
}

export default MyApp;
