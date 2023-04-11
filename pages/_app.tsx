import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navigation from '../containers/navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          {/* BOOTSTRAP 5  */}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
      </Head>
      <Navigation/>
      <Component {...pageProps} />
    </>
  );
}
