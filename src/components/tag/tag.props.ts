import { ReactNode } from "react";

export interface TagProps {
  size?: "m" | "s";
  color?: "red" | "green" | "primary";
  children: ReactNode;
}
