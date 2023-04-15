import "../styles/globals.css";
import "nprogress/nprogress.css";
import * as React from "react";
import NProgress from "nprogress";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
