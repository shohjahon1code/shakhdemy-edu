import React, { ForwardedRef, forwardRef } from 'react';
import classes from './input.module.css';
import cn from 'classnames';
import { InputProps } from './input.props';

const Input = forwardRef(({ error, className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={classes.inputWrapper}>
      <input className={cn(classes.input, className, {
        [classes.error]: error
      })} ref={ref} {...props} />
      {error && <span className={classes.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default Input;
