import React from 'react';

import styles from './styles.module.css';

export type Props = {
  isVisible: boolean;
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ isVisible, children }) => {
  if (!isVisible) {
    return null;
  }

  return <div className={styles.modal}>{children}</div>;
};
