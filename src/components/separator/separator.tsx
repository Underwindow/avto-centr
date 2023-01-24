import React from 'react';
import styles from './separator.module.scss';

export type SepVariant = 'secondary' | 'primary';

export type SepProps = {
  variant?: SepVariant;
  label?: string;
  span?: string;
};

const Separator: React.FC<SepProps> = ({ label, span, variant = 'primary'}) => (
  <div className={`${styles.separator} ${styles[`separator-${variant}`]}`}>
    {label && <div className='text-3'>{label}</div>}
    {span && <span className='text-3'>{span}</span>}
  </div>
);

export default Separator;
