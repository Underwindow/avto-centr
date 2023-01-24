import React from 'react';
import styles from './card.module.scss';
import chevronRight from '@/assets/UI/icons/chevron-right.svg';
import CircleButton from '@/components/circle-button';

type Props = {
  imageSrc: string;
  title: string;
  subtitle: string;
  onClick?: (e: MouseEvent) => void;
};

const Card: React.FC<Props> = ({
  imageSrc,
  title = 'default',
  subtitle = 16,
  onClick = (e) => console.log('card clicked', e)
}) => (
  <div className={styles.card} onClick={(e) => onClick(e.nativeEvent)}>
    <img className={styles.card__image} src={imageSrc} alt='' />
    <div className={styles['card__content-container']}>
      <div className={styles['card__content']}>
        <div className='headline-4'>{title}</div>
        <span className='headline-4'>{subtitle}</span>
      </div>
      <CircleButton src={chevronRight} variant={'primary'} size={'small'} disabled/>
    </div>
  </div>
);

export default Card;
