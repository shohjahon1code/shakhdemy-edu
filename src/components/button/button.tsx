import React from 'react';
import { ButtonProps } from './button.props';
import classes from './button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

const Button = ({ children, className, size, arrow = 'none', appearance, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={cn(classes.button, className, {
      [classes.primary]: appearance === 'primary',
      [classes.ghost]: appearance === 'ghost',
      [classes.failure]: appearance === 'failure',
      [classes.success]: appearance === 'success',
      [classes.s]: size === 's',
      [classes.m]: size === 'm',
      [classes.l]: size === 'l',
    })}
      {...props}
    >{children}

      {arrow !== 'none' && (
        <span className={cn(classes.arrow, {
          [classes.down]: arrow === 'down'
        })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
