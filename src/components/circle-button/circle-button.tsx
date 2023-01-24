import React from 'react';
import Button, { ButtonProps } from '@/components/button/button';

export type ButtonVariant = 'primary' | 'light' | 'dark';

type Props = {
  size?: 'default' | 'small';
  src: string;
} & Omit<ButtonProps, 'shape' | 'style'>;

const CircleButton: React.FC<Props> = ({ size = 'default', src, ...props }) => {
  const sizeStyle =
    size === 'small'
      ? {
          width: 40,
          height: 40
        }
      : {
          width: 60,
          height: 60
        };

  return (
    <Button {...props} shape={'circle'} style={sizeStyle}>
      <img src={src} alt='' />
    </Button>
  );
};

export default CircleButton;
