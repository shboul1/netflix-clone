// React
import React, { useEffect, useState } from 'react';
// next
import Head from 'next/head';
import { useRouter } from 'next/router';
// Components
import Navbar from '../components/Navbar';
// styles
import styles from '../styles/login.module.css';
// lib
import { magic } from '../lib/magic-links';

export default function login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const handleSignIn = async () => {
    setLoading(true);
    try {
      const Token = await magic.auth.loginWithMagicLink({ email });
      if (Token) {
        setLoading(false);
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
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
  return (
    <div>
      <Head>
        <title>Netflix - Sign in</title>
      </Head>
      <Navbar login />
      <div className={styles.loginContainer}>
        <div className={styles.signInCard}>
          <h3>Sign In</h3>
          <input type="text" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleSignIn}>{loading ? 'Loading...' : 'Sign In'}</button>
        </div>
      </div>
    </div>
  );
}
