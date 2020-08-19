import React from 'react';

// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';

// External Libs
import '../../public/libs/bootstrap/bootstrap.min.css';

// Custom styles
import '../../public/custom/css/template.css';

// External Components
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Nav from '../components/utils/nav';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
