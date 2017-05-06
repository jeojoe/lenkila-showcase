import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default ({ children, title = 'LENKILA : Thai Community For Sport Lovers', url }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Kanit:400|Open+Sans:700i" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="/static/normalize.css" />
      <link rel="stylesheet" type="text/css" href="/static/skeleton.css" />
      <script src="https://unpkg.com/scrollreveal@3.3.2/dist/scrollreveal.min.js"></script>
    </Head>
    <Navbar url={url} />
    { children }
    <Footer />
  </div>
);
