import React from 'react'
import classes from './review-form.module.css'
import CloseIcon from './close.svg'
import { ErrorProps } from './review-form.props'
const Error = ({setError}: ErrorProps) => {
  return (
    <div className={classes.error}>
    <div className={classes.successTitle}>Something went wrong!</div>
    <CloseIcon
      className={classes.close}
      onClick={() => setError(false)}
    />
  </div>
  )
}

export default Error
