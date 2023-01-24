import React, { PropsWithChildren } from 'react';
import styles from './intro-carousel.module.scss';
import Slider from '@/components/slider';

type Props = {
  currItemId?: number;
} & PropsWithChildren;

const IntroCarousel: React.FC<Props> = ({ currItemId = 0, ...props }) => (
  <div className={styles['intro-carousel']}>
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        display: 'flex'
      }}
    >
      {props.children}
    </div>
    <div className={styles['intro-carousel__footer']}>
      <Slider
        variant='primary'
        onLeftClick={() => console.log('leftClick')}
        onRightClick={() => console.log('RightClick')}
      />
      {Array.isArray(props.children) && (
        <span className='headline-3'>
          {currItemId + 1}/{props.children.length}
        </span>
      )}
    </div>
  </div>
);

export default IntroCarousel;
