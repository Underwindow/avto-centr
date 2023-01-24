import React from 'react';
import styles from './info.module.scss';

type Props = {
  title: string;
  text: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Info: React.FC<Props> = ({ title, text, ...props }) => (
  <div className={styles.info} {...props}>
    <div className={`text-1 ${styles.info__title}`}>{title}</div>
    <div className={`text-1 ${styles.info__text}`}>{text}</div>
  </div>
);

export default Info;
