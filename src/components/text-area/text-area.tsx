import React from 'react';
import classes from './text-area.module.css';
import cn from 'classnames';
import { TextAreaProps } from './text-area.props';

const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <textarea className={cn(classes.textarea, className)} {...props}></textarea>
  );
};

export default TextArea;
