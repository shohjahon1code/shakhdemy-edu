import React from 'react'
import { HhDataProps } from './hh-data.props';
import cn from 'classnames';
import classes from './hh-data.module.css';
import Card from '../card/card';
import RateIcon from './rate.svg'
import { convertToUSD } from '../../helpers/helpers';

const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
  return (
    <div className={classes.hh}>
      <Card color='primary' className={classes.count}>
        <div className={classes.title}>All Vacations</div>
        <div className={classes.countValue}>{count}</div>
      </Card>
      <Card className={classes.salary}>

        {/* junior */}
        <div>
          <div className={classes.title}>Junior</div>
          <div className={classes.salaryValue}>{convertToUSD(juniorSalary)}</div>
          <div className={classes.rate}>
            <RateIcon className={classes.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>

        {/* middle */}
        <div>
          <div className={classes.title}>Middle</div>
          <div className={classes.salaryValue}>{convertToUSD(middleSalary)}</div>
          <div className={classes.rate}>
            <RateIcon className={classes.filled} />
            <RateIcon className={classes.filled} />
            <RateIcon />
          </div>
        </div>

        {/* senior */}
        <div>
          <div className={classes.title}>Senior</div>
          <div className={classes.salaryValue}>{convertToUSD(seniorSalary)}</div>
          <div className={classes.rate}>
            <RateIcon className={classes.filled} />
            <RateIcon className={classes.filled} />
            <RateIcon className={classes.filled} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default HhData
