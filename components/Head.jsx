'use client'
import Head from "next/head";
import { useState } from "react";

function HeadMeta() {
  const [language, setLanguage] = useState('srb');

  return (
    <>
      <Head>
        <meta name="Description" content="Snimite Vase dogadjaje" />
        <title>Studio Rakita | {language === 'eng' ? 'Record event' : 'Snimite dogadjaj'}</title>
        <link rel="icon" href="/t-avt-1.png" />
      </Head>
    </>
  );
}

export default HeadMeta;
