import React from 'react'
import { AdvantagesProps } from './advantages.props'
import classes from './advantages.module.css';
import CheckIcon from './check.svg';
import Divider from '../divider/divider';

const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map(a => (
        <div key={a.id} className={classes.advantage}>
          <CheckIcon />
          <div className={classes.title}>{a.title}</div>
          <Divider className={classes.vLine} />
          <div className={classes.description}>{a.description}</div>
        </div>
      ))}
    </>
  )
}

export default Advantages
