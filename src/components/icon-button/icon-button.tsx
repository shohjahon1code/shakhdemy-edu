import React from 'react'
import { IconButtonProps, icons } from './icon-button.props'
import cn from 'classnames';
import classes from './icon-button.module.css';

const IconButton = ({ appearance, icon, className, ...props }: IconButtonProps): JSX.Element => {

  const IconComponent = icons[icon]
  return (
    <button className={cn(classes.iconButton, className, {
      [classes.primary]: appearance == 'primary',
      [classes.white]: appearance == 'white'
    })} {...props}>
      <IconComponent />
    </button>
  )
}

export default IconButton
