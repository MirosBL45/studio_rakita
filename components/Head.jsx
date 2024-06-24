// 'use client';
import Head from 'next/head';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useLanguage } from './LanguageContext';

function HeadMeta() {
  // const { language } = useLanguage();
  // const router = useRouter();

  // useEffect(() => {
  //   document.title = `Studio Rakita | ${
  //     language === 'eng' ? 'Record event' : 'Snimite dogadjaj'
  //   }`;
  // }, [language, router.pathname]);

  return (
    <>
      <Head>
        <meta name="Description" content="Snimite svoje najbitnije dogadjaje" />
        <title>Studio Rakita | Snimite svoje najbitnije dogadjaje</title>
        <link rel="icon" href="/t-avt-1.png" />
      </Head>
    </>
  );
}

export default HeadMeta;
