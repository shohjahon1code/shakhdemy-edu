import React from 'react';
import classes from './input.module.css';
import cn from 'classnames';
import { InputProps } from './input.props';

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input className={cn(classes.input, className)} {...props} />
  );
};

export default Input;
