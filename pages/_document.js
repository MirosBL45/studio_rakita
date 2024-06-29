import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="sr-Latn-RS">
            <Head>
                <meta name="description" content="Profesionalno snimanje i fotografisanje svadbi, krštenja, rođendana, i drugih važnih događaja. Pružamo i snimanje fudbalskih, košarkaških i vaterpolo utakmica, ritmičke gimnastike, uz snimanje dronom kao i usluge livestream. Uživajte u najlepšim uspomenama sa profesionalnim kvalitetom." />
                <link rel="icon" type="image/x-icon" href="/rakita-studio-logo.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}