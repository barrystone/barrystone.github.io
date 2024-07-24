// import '../styles/globals.css'
import '../styles/css/main.css';
// import '../assets/css/main.css';

import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

import { ReactElement, ComponentType } from 'react';

function MyApp({
  Component,
  pageProps,
}: {
  Component: ComponentType<any>;
  pageProps: any;
}): ReactElement {
  //Integrate with LogRocket
  require('../devTools/logrocket');

  return <Component {...pageProps} />;
}

export default MyApp;
