// pages/_app.js
import '../styles/globals.css';
import Navbar from '../NavBar/navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Component {...pageProps} />
      </main>
    </>
  );
}
