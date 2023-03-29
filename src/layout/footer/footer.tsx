import { FooterProps } from "./footer.props";
import classes from './footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, classes.footer)} {...props}>
      <div>Shakhdemy © 2022-{format(new Date, 'yyyy')} All right reserved</div>
      <a href="#">Terms of us</a>
      <a href="#">Privacy Policy</a>
    </footer>
  );
};

export default Footer;
