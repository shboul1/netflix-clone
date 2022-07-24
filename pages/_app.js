import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { magic } from '../lib/magic-links';
import { useRouter } from 'next/router';
import Spinner from '../components/Spinner';
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const userLoggedInChecker = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      isLoggedIn ? router.push('/') : router.push('/login');
    };
    userLoggedInChecker();
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = (url, { shallow }) => {
      setLoading(true);
    };
    const handleRouteChangeComplete = (url, { shallow }) => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return loading ? <Spinner /> : <Component {...pageProps} />;
}

export default MyApp;
