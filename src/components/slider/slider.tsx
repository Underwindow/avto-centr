import React from 'react';
import styles from './slider.module.scss';
import { ButtonVariant } from '@/components/button/button';
import arrowLeft from '@/assets/UI/icons/arrow-left.svg';
import arrowRight from '@/assets/UI/icons/arrow-right.svg';
import CircleButton from '@/components/circle-button';
import { ButtonMouseEvent } from '@/components/types';

type Props = {
  onLeftClick: (e: ButtonMouseEvent) => void;
  onRightClick: (e: ButtonMouseEvent) => void;
  variant: ButtonVariant;
};

const Slider: React.FC<Props> = ({ onLeftClick, onRightClick, variant }) => {
  return (
    <div className={styles.slider}>
      <CircleButton
        variant={variant}
        src={arrowLeft}
        onClick={(e) => onLeftClick(e)}
      />
      <CircleButton
        variant={variant}
        src={arrowRight}
        onClick={(e) => onRightClick(e)}
      />
    </div>
  );
};

export default Slider;
