import React, { useEffect, useState } from 'react';
import { RatingProps } from './rating.props';
import classes from './rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';

const Rating = ({ rating, isEditable = false, setRating, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const renderRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, idx: number) => (
      <span className={cn(classes.star, {
        [classes.filled]: idx < currentRating,
        [classes.editable]: isEditable,
      })}
        onMouseEnter={() => changeRatingDisplay(idx + 1)}
        onMouseLeave={() => changeRatingDisplay(rating)}
        onClick={() => clickRatingHandler(idx + 1)}
      >
        <StarIcon />
      </span>
    ));

    setRatingArray(updatedArray);
  };

  const changeRatingDisplay = (idx: number) => {
    if (!isEditable) {
      return;
    }
    renderRating(idx);
  };

  const clickRatingHandler = (idx: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(idx);
  };

  useEffect(() => {
    renderRating(rating);
  }, [rating]);

  return (
    <div className={cn(classes.rating)} {...props}>
      {ratingArray.map((rating, i) => (
        <span key={i}>{rating}</span>
      ))}
    </div>
  );
};

export default Rating;
