export interface IReviewForm {
  title: string;
  description: string;
  name: string;
  rating: number;
}

export interface IReviewResponse {
  name: string;
  rating: number;
  description: string;
  title: string;
  id: number;
  productId: string;
}
