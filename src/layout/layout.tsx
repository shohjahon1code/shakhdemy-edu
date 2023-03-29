import React, { FunctionComponent } from 'react';
import { LayoutProps } from './layout.props';
import Sidebar from './sidebar/sidebar';
import Header from './header/header';
import Footer from './footer/footer';
import classes from './layout.module.css';

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

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    console.log(props.data);
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
