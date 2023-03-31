import { PageModel, PageCategory } from "./../../interface/page.interface";
import { ProductModel } from "../../interface/product.interface";

export interface CoursePageComponentsProps {
  firstCategory: PageCategory;
  page: PageModel;
  products: ProductModel[];
}
