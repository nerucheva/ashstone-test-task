import React from 'react';
import { useEffect } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export type Props = {
  isVisible: boolean;
  children: React.ReactNode;
  width?: number | string;
};

export const Modal: React.FC<Props> = ({ isVisible, children, width = '100%' }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      document.body.style.top = '';
    }
  }, [isVisible]);

  return (
    <div className={clsx(styles.modal, { [styles.modalOpen]: isVisible })} style={{ width }}>
      {children}
    </div>
  );
};
