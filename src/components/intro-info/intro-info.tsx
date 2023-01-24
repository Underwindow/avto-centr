import React from 'react';
import styles from './intro-info.module.scss';
import Info from '@/components/info';
import Button from '@/components/button';
import arrowDown from '@/assets/UI/icons/arrow-down.svg';

const IntroInfo: React.FC = () => (
  <div className={styles['intro-info']}>
    <h1 className={`headline-1 ${styles['intro-info__header']}`}>Специализированный Автосервис</h1>
    <div className={styles.main}>
      <h1 className={`headline-1 ${styles['main__header']}`}>+7 (999) 123-45-67</h1>
      <div className={styles['main__info-group']}>
        <Info title={'Работаем для вас:'} text={'Ежедневно с 9:00 до 21:00'} />
        <Info
          title={'По адресу: '}
          text={'Екатеринбург, ул. Московский тракт 7 км, 2'}
        />
      </div>
      <div className={styles['main__button-container']}>
        <Button variant={'primary'} shape={'rounded'}>
          Смотреть услуги
          <img src={arrowDown} height={20} style={{marginLeft: 15}} alt='arrow-down' />
        </Button>
      </div>
    </div>
  </div>
);

export default IntroInfo;
