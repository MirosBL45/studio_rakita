"use client";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

function HeadMeta({language}) {
  const router = useRouter();

  useEffect(() => {
    document.title = `Studio Rakita | ${
      language === "eng" ? "Record event" : "Snimite dogadjaj"
    }`;
  }, [language, router.pathname]);

  return (
    <>
      <Head>
        <meta name="Description" content="Snimite Vase dogadjaje" />
        {/* <title>Studio Rakita | Record event</title> */}
        <link rel="icon" href="/t-avt-1.png" />
      </Head>
    </>
  );
}

export default HeadMeta;
