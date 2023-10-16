// _app.js (or MyApp.js)
import '../styles/globals.css';
import Footer from '../components/Footer';
import Head from 'next/head';
import "@fontsource/montserrat";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";


function MyApp({ session, Component, ...pageProps }) {

  useEffect(() => {


  }, [session]);

  return (
    <SessionProvider session={session}>
      <>
        <Head>
          <title>The Beans Needs</title>
        </Head>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow font-sans">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </>
    </SessionProvider>
  )
};

export default MyApp 
