import { HTMLAttributes, ReactNode, DetailedHTMLProps } from "react";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  color?: "white" | "primary";
}
