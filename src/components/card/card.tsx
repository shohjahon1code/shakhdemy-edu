import { CardProps } from "./card.props";
import classes from './card.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

const Card = forwardRef(({ children, color = 'primary', className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return (
    <div ref={ref} className={cn(classes.card, className, {
      [classes.primary]: color === 'primary'
    })} {...props}>
      {children}
    </div >
  );
});

export default Card;
