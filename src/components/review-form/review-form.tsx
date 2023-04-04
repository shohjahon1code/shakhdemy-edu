import { ReviewFormProps } from "./review-form.props"
import classes from './review-form.module.css';
import cn from 'classnames';
import Input from "../input/input";
import Rating from "../rating/rating";
import { useState } from "react";
import TextArea from "../text-area/text-area";
import Button from "../button/button";
import { Controller, useForm } from "react-hook-form";
import { IReviewForm } from "./review-form.interface";
const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<IReviewForm>()
  const [rating, setRating] = useState<number>(0);

  const onSubmit = (data: IReviewForm) => {
    console.log(data)
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(className, classes.reviewForm)} {...props}>
        <Input placeholder="Name" error={errors.name} className={classes.name} {...register("name", { required: { value: true, message: 'Name is required' } })} />
        <Input placeholder="Title" error={errors.title} className={classes.title} {...register('title', { required: { value: true, message: "Title is required" } })} />
        <div className={classes.rating}>
          <span>Rating: </span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Rating is required' } }}
            render={({ field }) => <Rating isEditable error={errors.rating} rating={field.value} ref={field.ref} setRating={field.onChange} />} />
        </div>
        <TextArea placeholder="Description" className={classes.description} error={errors.description} {...register("description", { required: { value: true, message: 'Textarea is required' } })} />
        <div className={classes.submit}>
          <Button appearance="primary">Submit</Button>
          <span className={classes.info}>*Your review will be moderated and reviewed before being published</span>
        </div>
      </div>
    </form>
  )
}

export default ReviewForm
