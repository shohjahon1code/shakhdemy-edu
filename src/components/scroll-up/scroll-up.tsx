import React, { useEffect } from 'react'
import classes from './scroll-up.module.css';
import UpIcon from './up.svg';
import { motion } from 'framer-motion';
import { useScrollY } from '../../hooks/useScrollY';
import IconButton from '../icon-button/icon-button';


const ScrollUp = () => {
  const scrollY = useScrollY()


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    scrollY > 150 && (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
        exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
        whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
        className={classes.scrollUp}
      >
        <IconButton appearance='primary' icon='up' onClick={scrollToTop} />
      </motion.div>
    )
  )
}

export default ScrollUp
