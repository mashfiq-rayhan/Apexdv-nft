import Head from "next/head";
import Script from "next/script";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TriggerModal from '../components/ModalComponent/TriggerModal';
import '../styles/globals.css';
import axios from 'axios';
axios.defaults.baseURL = "https://api.apexdv.com";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ApexDv</title>
        <meta name="description" content="NFT Marketplace" />
        <link rel="icon" href="/iconLogo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Livvic:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Component {...pageProps} />
      {/* <TawkMessengerReactUmd
        propertyId="5cfb3c97b534676f32adea51"
        widgetId="default" /> */}
      <TriggerModal />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
    </>
  );
}

export default MyApp;
