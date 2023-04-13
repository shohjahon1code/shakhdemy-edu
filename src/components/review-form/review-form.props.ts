import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import { DetailedHTMLProps } from "react";

export interface ReviewFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string;
}

export interface SuccessProps {
  setIsSuccess?: Dispatch<SetStateAction<boolean>>
}

export interface ErrorProps {
  setError?: Dispatch<SetStateAction<boolean>>
}