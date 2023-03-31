import React from 'react'
import { CoursePageComponentsProps } from './course-page-component.props'
import classes from './course-page-component.module.css';
import cn from 'classnames';
import { Heading, Tag } from '../../components';

const CoursePageComponent = ({ firstCategory, page, products }: CoursePageComponentsProps): JSX.Element => {
  return (
    <div className={classes.wrapper}>
      {/* Title */}
      <div className={classes.title}>
        <Heading tag='h1'>{page.title}</Heading>
        <div>Sort...</div>
      </div>
      {/* Products */}
      <div>products</div>

      {/* Vacations */}
      <div className={classes.hhTitle}>
        <Heading tag='h2'>Vacations - {page.category}</Heading>
        <Tag color='red' size='m'>hh.uz</Tag>
      </div>
    </div>
  )
}

export default CoursePageComponent
