import { HTMLAttributes } from "react";
import { DetailedHTMLProps } from "react";
import { ProductModel } from "../../interface/product.interface";
export interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
}
