import React, { ForwardedRef, forwardRef } from 'react';
import classes from './text-area.module.css';
import cn from 'classnames';
import { TextAreaProps } from './text-area.props';

const TextArea = forwardRef(({ className, error, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <div className={cn(classes.textAreaWrapper, className)}>
      <textarea className={cn(classes.textarea, className, {
        [classes.error]: error
      })} ref={ref} {...props}></textarea>
      {error && <span className={classes.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default TextArea;
