import React from 'react';
import { HeadingProps } from './heading.props';
import classes from './heading.module.css'

const Heading = ({ children, tag }: HeadingProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={classes.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={classes.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={classes.h3}>{children}</h3>;
    case 'h4':
      return <h4 className={classes.h4}>{children}</h4>;
    default:
      return <>{children}</>;
  }
};

export default Heading;
