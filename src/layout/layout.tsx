import React, { FunctionComponent } from 'react';
import { LayoutProps } from './layout.props';
import Sidebar from './sidebar/sidebar';
import Header from './header/header';
import Footer from './footer/footer';
import classes from './layout.module.css';
import { AppContextProvider, IAppContext } from '../context/app.context';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={classes.wrapper}>
      <Header className={classes.header} />
      <Sidebar className={classes.sidebar} />
      <div className={classes.body}>{children}</div>
      <Footer className={classes.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    console.log(props.data);
    return (
      <Layout>
        <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
          <Component {...props} />
        </AppContextProvider>
      </Layout>
    );
  };
};
