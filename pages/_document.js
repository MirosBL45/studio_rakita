import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="sr-Latn-RS">
            <Head>
                <meta name="Description" content="Snimite svoje najbitnije dogadjaje" />
                <link rel="icon" type="image/x-icon" href="/rakita-studio-logo.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}