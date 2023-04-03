import { ReviewFormProps } from "./review-form.props"
import classes from './review-form.module.css';
import cn from 'classnames';
import Input from "../input/input";
import Rating from "../rating/rating";
import { useState } from "react";
import TextArea from "../text-area/text-area";
import Button from "../button/button";
const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  const [rating, setRating] = useState<number>(0);


  return (
    <div className={cn(className, classes.reviewForm)} {...props}>
      <Input placeholder="Name" className={classes.name} />
      <Input placeholder="Title" className={classes.title} />
      <div className={classes.rating}>
        <span>Rating: </span>
        <Rating isEditable rating={rating} setRating={setRating} />
      </div>
      <TextArea placeholder="Description" className={classes.description} />
      <div className={classes.submit}>
        <Button appearance="primary">Submit</Button>
        <span className={classes.info}>*Your review will be moderated and reviewed before being published</span>
      </div>
    </div>
  )
}

export default ReviewForm
