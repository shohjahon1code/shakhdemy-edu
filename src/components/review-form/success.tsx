import React from "react";
import classes from "./review-form.module.css";
import CloseIcon from "./close.svg";
import { SuccessProps } from "./review-form.props";

const Success = ({ setIsSuccess }: SuccessProps): JSX.Element => {
  return (
    <div className={classes.success}>
      <div className={classes.successTitle}>Review sent successfully</div>
      <div>Thanks your review will published after testing</div>
      <CloseIcon
        className={classes.close}
        onClick={() => setIsSuccess(false)}
      />
    </div>
  );
};

export default Success;
