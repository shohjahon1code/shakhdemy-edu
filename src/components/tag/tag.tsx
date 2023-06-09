import React from "react";
import { TagProps } from "./tag.props";
import classes from "./tag.module.css";
import cn from "classnames";

const Tag = ({
  size,
  children,
  color,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(className, classes.tag, {
        [classes.s]: size === "s",
        [classes.m]: size === "m",
        [classes.l]: size === "l",
        [classes.red]: color === "red",
        [classes.green]: color === "green",
        [classes.primary]: color === "primary",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tag;
