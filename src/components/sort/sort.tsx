import React from 'react'
import { SortEnum, SortProps } from './sort.props'
import classes from './sort.module.css'
import cn from 'classnames';
import SortIcon from './sort.svg';


const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={cn(className, classes.sort)} {...props}>
      <span className={cn({
        [classes.active]: sort == SortEnum.Rating
      })}>
        <SortIcon className={classes.sortIcon} /> Rating
      </span>
      
      <span className={cn({
        [classes.active]: sort == SortEnum.Price
      })}>
        <SortIcon className={classes.sortIcon} /> Price
      </span>
    </div>
  )
}

export default Sort
