import React, { useEffect } from 'react';
import Head from 'next/head';
import ReactGA from 'react-ga';

const siteName = 'Guilherme Maccali';
const title = 'Guilherme Maccali - Programador que da Vida a sua Ideia';
const description =
  'Olá, sou programador Fullstack, Entusiasta em tecnologias produtivas, Adoro desafios e fazer belas aplicações tomarem vida através de código limpo';
const imagemUrl = '/imgs/social.png';

function Meta() {
  useEffect(() => {
    if (window.location.hostname !== 'localhost') {
      ReactGA.initialize('UA-158633079-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  });

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="google-site-verification"
        content="HAjlWQjWiA57CNVQ7noJE7H2TfpUTivWdUw5iMCeeXc"
      />
      <meta name="description" content={description}></meta>
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href="https://maccali.pictu.one/" />

      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <meta name="theme-color" content="#0E2C54"></meta>

      <link rel="manifest" href="/manifest.json?v=1" />
      <link rel="icon" href="/favicon.ico?v=1" />

      {/* Apple Tags*/}
      <link rel="apple-touch-icon" href="/icons/icon192.png?v1" />
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>

      {/* Open Grafh Tags */}
      <meta name="og:locale" property="og:locale" content="pt_BR" />
      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta name="og:site_name" property="og:site_name" content={siteName} />
      <meta
        name="og:url"
        property="og:url"
        content="https://guilhermemaccali.com"
      />
      <meta name="og:image" property="og:image" content={imagemUrl} />
      <meta
        name="og:image:secure_url"
        property="og:image:secure_url"
        content={imagemUrl}
      />
      <meta name="og:image:width" property="og:image:width" content="1200" />
      <meta name="og:image:height" property="og:image:height" content="630" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={siteName} />
      <meta name="twitter:creator" content="Guilherme Maccali" />
      <meta name="twitter:image" content={imagemUrl} />

      {/* <script data-ad-client="ca-pub-8175357641608662" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
    </Head>
  );
}

export default Meta;
