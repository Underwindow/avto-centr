import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

export type ButtonVariant = 'primary' | 'light' | 'dark';

export type ButtonProps = {
  variant: ButtonVariant;
  shape?: 'rounded' | 'circle' | 'default';
  size?: 'small';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  variant,
  shape = 'default',
  children,
  size,
  ...props
}) => {
  return (
    <button
      className={`${size ? `btn-${size}` : 'btn'} ${styles.button} ${
        styles[`button-${variant}`]
      } ${styles[`button-${shape}`]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
