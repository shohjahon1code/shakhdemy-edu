import React, { useState } from "react";
import { HeaderProps } from "./header.props";
import classes from "./header.module.css";
import cn from "classnames";
import LogoIcon from "../logo.svg";
import { IconButton } from "../../components";
import Sidebar from "../sidebar/sidebar";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isopen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        stiffnes: 20,
      },
    },
    close: {
      opacity: 0,
      x: "100%",
    },
  };
  return (
    <div className={classes.header} {...props}>
      <Link href={"/"}>
        <LogoIcon />
      </Link>
      <IconButton appearance="white" icon="menu" onClick={toggleMenu} />
      <motion.div
        variants={variants}
        initial={"close"}
        animate={isopen ? "open" : "close"}
        className={classes.mobilemenu}
      >
        <Sidebar />
        <IconButton
          appearance="white"
          icon="close"
          className={classes.closeIcon}
          onClick={toggleMenu}
        />
      </motion.div>
    </div>
  );
};

export default Header;
