import { ProductProps } from './product.props';
import cn from 'classnames';
import classes from './product.module.css';
import Card from '../card/card';
import Image from 'next/image';
import { convertToUSD, dedectedReview } from '../../helpers/helpers';
import Tag from '../tag/tag';
import Rating from '../rating/rating';
import Divider from '../divider/divider';
import Button from '../button/button';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import { motion } from 'framer-motion'


const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [reviewOpen, setReviewOpen] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: {
      opacity: 1,
      height: "auto"
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  }

  const scrollToReview = () => {
    setReviewOpen(true)
    reviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={cn(className)} ref={ref} {...props}>
      <Card className={classes.product}>
        <div className={classes.logo}>
          <Image src={product.images} alt={product.title} width={'70'} height={'70'} />
        </div>
        <div className={classes.title}>{product.title}</div>
        <div className={classes.price}>
          {convertToUSD(product.price)}
          {product.oldPrice && (
            <Tag className={classes.oldPrice} color='green'>{convertToUSD(product.price - product.oldPrice)}</Tag>
          )}
        </div>
        <div className={classes.credit}>{convertToUSD(product.credit)}/<span className={classes.month}>month</span></div>
        <div className={classes.rating}>
          <Rating rating={product.initialRating} />
        </div>
        <div className={classes.tags}>
          {product.tags && product.tags.map(t => (
            <Tag key={t} className={classes.categories} color='primary' size='m'>{t}</Tag>
          ))}
        </div>
        <div className={classes.priceTitle}>Price</div>
        <div className={classes.creditTitle}>Credit</div>
        <div className={classes.rateTitle}>{product.reviewCount}
          <a href="#review" onClick={scrollToReview}>{dedectedReview(product.reviewCount)}</a>
        </div>

        <Divider className={classes.hr} />
        <div className={classes.description}>{product.description}</div>
        <div className={classes.features}>
          {product.characteristics.length && product.characteristics.map(ch => (
            <div className={classes.characteristic} key={ch.name}>
              <span className={classes.characteristicName}>{ch.name}</span>
              <span className={classes.characteristicDots}></span>
              <span className={classes.characteristicValue}>{ch.value}</span>
            </div>
          ))}
        </div>
        <div className={classes.advantageBlock}>
          {product.advantages && (
            <div className={classes.advantages}>
              <div className={classes.advantageTitle}>Advantages</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={classes.disadvantages}>
              <div className={classes.disadvantageTitle}>DisAdvantages</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={classes.hr2} />
        <div className={classes.actions}>
          <Button appearance='primary'>More Details</Button>
          <Button appearance='ghost' arrow={reviewOpen ? "down" : 'right'} className={classes.reviewBtn} onClick={() => setReviewOpen(prev => !prev)}>
            Review
          </Button>
        </div>
      </Card>
      <motion.div animate={reviewOpen ? 'visible' : 'hidden'} variants={variants} initial={'hidden'}>
        <Card color='white' ref={reviewRef} className={cn(classes.reviews)}>

          {product.reviews.map(c => (
            <div key={c._id}>
              <Review review={c} />
              <Divider />
            </div>
          ))}
          <ReviewForm productId={product._id} />
        </Card>
      </motion.div>
    </div>
  )
}))

export default Product
