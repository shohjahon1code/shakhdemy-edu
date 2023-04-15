import React, { FunctionComponent } from "react";
import { LayoutProps } from "./layout.props";
import Sidebar from "./sidebar/sidebar";
import Header from "./header/header";
import Footer from "./footer/footer";
import classes from "./layout.module.css";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { ScrollUp } from "../components";
import { useRouter } from "next/router";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={classes.wrapper}>
      <Header className={classes.header} />
      <Sidebar className={classes.sidebar} />
      <div className={classes.body}>{children}</div>
      <Footer className={classes.footer} />
      <ScrollUp />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T) {
    const router = useRouter();
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        {router.asPath == "/" ? (
          <Component {...props} />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      </AppContextProvider>
    );
  };
};
