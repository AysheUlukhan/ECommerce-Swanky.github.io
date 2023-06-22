import Layout from '@/components/Layout';
import '@/styles/globals.css'
// import Navbar from '@/components/navbar/navbar';
// import Footer from '@/components/footer/footer';



export default function App({ Component, pageProps }) {
  return (
  <>
  {/* <Navbar/>
  <Component {...pageProps} />
  <Footer/> */}
  <Layout>
    <Component {...pageProps} />
  </Layout>

  </>
  );
}
