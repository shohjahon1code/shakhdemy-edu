import { CardProps } from "./card.props";
import classes from './card.module.css';
import cn from 'classnames';

const Card = ({ children, color, className, ...props }: CardProps): JSX.Element => {
  return (
    <div className={cn(classes.card,className, {
      [classes.primary]: color === 'primary'
    })} {...props}>
      {children}
    </div >
  );
};

export default Card;
