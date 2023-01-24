import React from 'react';
import styles from './header.module.scss';
import logo from '@/assets/logo.svg';
import more from '@/assets/UI/icons/menu.svg';
import chevronDown from '@/assets/UI/icons/chevron-down.svg';
import Button from '@/components/button';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} height={60} alt='logo' />
      </div>
      <div className={styles.header__menu}>
        <div className={styles['header__link-hover']}>
          Услуги
          <img src={chevronDown} height={20} alt='arrow-down' />
        </div>
        <div className={`link ${styles.header__link}`}>О компании</div>
        <div className={`link ${styles.header__link}`}>Гарантии</div>
        <div className={`link ${styles.header__link}`}>Новости</div>
        <div className={`link ${styles.header__link}`}>Акции</div>
        <div className={`link ${styles.header__link}`}>Контакты</div>

        <div className={styles.header__actions}>
          <div className={styles['header__actions-more']}>
            <img src={more} width={36} alt='info' />
          </div>
          <div className={styles['header__actions-primary']}>
            <Button variant={'primary'} shape={'rounded'} size='small'>
              Запись на сервис
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
