import React, { useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'

// External Libs
import '../public/libs/bootstrap/bootstrap.min.css'

// Custom styles
import '../public/custom/css/black-dashboard-react.css'
import '../public/custom/css/demo.css'
import '../public/custom/css/template.css'

// External Components
import 'react-datepicker/dist/react-datepicker.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import Nav from '../components/utils/Nav'
import Footer from '../components/utils/Footer'
import Auth from '../helpers/Auth.ts'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [allowLoad, setAllowLoad] = useState(false);

  const allowEntryPoints = [
    '/'
  ];

  const prohibitNavigationBars = [
    '/'
  ];

  useLayoutEffect(() => {
    if (!allowEntryPoints.includes(window.location.pathname)) {
      console.log(`💋👀 Verificando Autenticidade para rota "${window.location.pathname}"`)
      if (!Auth.isAuth()) {
        router.push('/');
        setAllowLoad(false)
      } else {
        setAllowLoad(true)
      }
    } else {
      console.log(`👌👍 Rota Livre "${window.location.pathname}"`)
      setAllowLoad(true)
    }
  }, [])

  return <>
    {!prohibitNavigationBars ? <Nav /> : ''}
    {allowLoad ? <Component {...pageProps} /> : ''}
    {!prohibitNavigationBars ? <Footer /> : ''}
  </>
}


