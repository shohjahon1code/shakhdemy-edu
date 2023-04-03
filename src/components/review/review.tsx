import React from 'react'
import { ReviewProps } from './review.props'
import cn from 'classnames';
import classes from './review.module.css';
import UserIcon from './user.svg';
import Rating from '../rating/rating';

const Review = ({ review }: ReviewProps): JSX.Element => {
  return (
    <div className={classes.review}>
      <UserIcon className={classes.user} />
      <div className={classes.title}>
        <span className={classes.name}>{review.name}</span>
        <span>{review.title}</span>
      </div>

      <div className={classes.rating}>
        <Rating rating={review.rating} />
      </div>
      <div className={classes.description}>{review.description}</div>
    </div>
  )
}

export default Review
