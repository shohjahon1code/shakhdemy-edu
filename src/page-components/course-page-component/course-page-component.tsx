import React, { useReducer } from 'react'
import { CoursePageComponentsProps } from './course-page-component.props'
import classes from './course-page-component.module.css';
import cn from 'classnames';
import { Advantages, Heading, HhData, Product, Sort, Tag, Text } from '../../components';
import { sortReducer } from './sort.reducer';
import { SortEnum } from '../../components/sort/sort.props';

const CoursePageComponent = ({ firstCategory, page, products, ...props }: CoursePageComponentsProps): JSX.Element => {
  const [state, dispatch] = useReducer(sortReducer, { sort: SortEnum.Rating, products: products })

  const setSort = (sort: SortEnum) => {
    dispatch({ type: sort })
  }

  return (
    <div className={classes.wrapper}>
      {/* Title */}
      <div className={classes.title}>
        <Heading tag='h1'>{page.title}</Heading>
        <Sort sort={state.sort} setSort={setSort} />
      </div>
      {/* Products */}
      <div>{state.products.length && state.products.map((c, i) => (
        <Product key={i} product={c} />
      ))}</div>

      {/* Vacations */}
      <div className={classes.hhTitle}>
        <Heading tag='h2'>Vacations - {page.category}</Heading>
        <Tag color='red' size='m'>hh.uz</Tag>
      </div>
      {/* hhdate */}

      {page.hh && <HhData  {...page.hh} />}
      {/* Advantages */}
      {page.advantages && page.advantages.length && (
        <>
          <Heading tag='h2'>Advantages</Heading>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {/* Description */}
      <Text>{page.description}</Text>

      {/* Skills */}
      <Heading tag='h2'>Skills</Heading>
      {page.tags.length && page.tags.map(t => (
        <Tag size='m' color='primary' key={t}>{t}</Tag>
      ))}
    </div>
  )
}

export default CoursePageComponent
