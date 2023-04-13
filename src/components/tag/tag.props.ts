import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "m" | "s" | "l";
  color?: "red" | "green" | "primary";
  children: ReactNode;
}
