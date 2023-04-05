import React, { useEffect, useReducer } from 'react'
import { CoursePageComponentsProps } from './course-page-component.props'
import classes from './course-page-component.module.css';
import cn from 'classnames';
import { Advantages, Heading, HhData, Product, Sort, Tag, Text } from '../../components';
import { sortReducer } from './sort.reducer';
import { SortEnum } from '../../components/sort/sort.props';
import { spring } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';


const CoursePageComponent = ({ firstCategory, page, products, ...props }: CoursePageComponentsProps): JSX.Element => {
  const [state, dispatch] = useReducer(sortReducer, { sort: SortEnum.Rating, products: products })

  const setSort = (sort: SortEnum) => {
    dispatch({ type: sort })
  }

  useEffect(() => {
    dispatch({ type: 'reset', initialState: products })
  }, [products])

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 10
  }

  const animations = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 1 }
  }

  return (
    <div className={classes.wrapper}>
      {/* Title */}
      <div className={classes.title}>
        <Heading tag='h1'>{page.title}</Heading>
        <Sort sort={state.sort} setSort={setSort} />
      </div>
      {/* Products */}
      <AnimatePresence>{state.products.length && state.products.map((c, i) => (
        <Product key={i} layout transition={spring} {...animations} product={c} />
      ))}</AnimatePresence>

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
