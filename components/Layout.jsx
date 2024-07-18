// fonts
import { Sora } from '@next/font/google';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';
import Head from './Head';

function Layout({ children }) {
  const router = useRouter();
  const [isBlogPage, setIsBlogPage] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url.startsWith('/blog/')) {
        setTimeout(() => {
          setIsBlogPage(true);
        }, 2000); // 2000 ms = 2 seconds
      } else {
        setIsBlogPage(false);
      }
    };

    // Check on initial load
    handleRouteChange(router.pathname);

    // Listen to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <div
      className={classNames(
        'page bg-site text-white bg-cover bg-no-repeat relative',
        sora.variable,
        { 'no-h-screen': isBlogPage }
      )}
    >
      <Head />
      <Nav />
      <Header />
      <TopLeftImg />
      {children}
    </div>
  );
}

export default Layout;
