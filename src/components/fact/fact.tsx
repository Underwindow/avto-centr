import React, { PropsWithChildren } from 'react';
import styles from './fact.module.scss';

type Props = {
  imageSrc: string;
} & PropsWithChildren;

const Fact: React.FC<Props> = ({ imageSrc, children }) => (
  <div className={styles.fact}>
    <img className={styles.fact__image} src={imageSrc} alt='' />
    <div className={`headline-4 ${styles.fact__text}`}>{children}</div>
  </div>
);

export default Fact;
