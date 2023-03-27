import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "m" | "l" | "s";
  children: ReactNode;
}
