import React from 'react';
import styles from './advantage-info.module.scss';

const AdvantageInfo: React.FC = () => (
  <div className={styles['advantage-info']}>
    <header>
      Работаем <br />с 2012 года
    </header>
    <div>
      Вашим автомобилем будут заниматься люди
      <br />
      с большим опытом, полученным за многие годы
      <br />и прошедшие множество обучений.
      <p style={{marginBottom: 0}}>
        Сотрудники обладают огромным багажом знаний,
        <br />
        применяемых на практике.
      </p>
    </div>
  </div>
);

export default AdvantageInfo;
