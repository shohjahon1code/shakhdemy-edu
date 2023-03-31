import Menu from "../menu/menu";
import { SidebarProps } from "./sidebar.pprops";
import cn from 'classnames';
import classes from './sidebar.module.css'
import Link from "next/link";
import { Divider } from "../../components";

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, classes.sidebar)} {...props}>
      <Link href={'/'}>
        Logo
        <Divider />
      </Link>
      <div>Search...</div>
      <Menu />
    </div>
  );
};

export default Sidebar;
