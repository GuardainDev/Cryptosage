import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import { SSRProvider } from "react-bootstrap";

import { useRouter } from "next/router";
import Lottie from "lottie-react";
import callItLoader from "../images/json/Call-it-loader.json";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/globals.scss";
import "../styles/jtm-global-style.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const pages = ["/", "/404"];

  return (
    <>
      <div className="loader-container">
        {/* <div className="top-loader"></div> */}

        <Lottie
          animationData={callItLoader}
          className={"toploader-lotti-icon"}
        />
      </div>
      <main className={"trading_page_wrapper"}>
        <section className={"trading_page_layout"}>
          <SSRProvider>
            {/* <Provider store={store}> */}
            <Component {...pageProps} />
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              close={true}
            />
            {/* </Provider> */}
          </SSRProvider>
        </section>
      </main>
    </>
  );
}

export default MyApp;
