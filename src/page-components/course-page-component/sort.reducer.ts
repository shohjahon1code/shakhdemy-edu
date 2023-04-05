import { ProductModel } from "./../../interface/product.interface";
import { SortEnum } from "./../../components/sort/sort.props";

export type SortActions =
  | { type: SortEnum.Rating }
  | { type: SortEnum.Price }
  | { type: "reset"; initialState: ProductModel[] };

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortActions) => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    case "reset":
      return {
        sort: SortEnum.Rating,
        products: action.initialState,
      };
    default:
      throw new Error("Something went wrong!");
  }
};
