import React from 'react';
import { TextProps } from './text.props';
import classes from './text.module.css';
import cn from 'classnames';

const Text = ({ children, size = 'm' }: TextProps): JSX.Element => {
  return (
    <p className={cn(classes.p, {
      [classes.s]: size === 's',
      [classes.m]: size === 'm',
      [classes.l]: size === 'l',
    })}>{children}</p>
  );
};

export default Text;
