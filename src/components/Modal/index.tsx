import React from 'react';
import { useEffect } from 'react';
import clsx from 'clsx';

import { Dimmer } from '../Dimmer';
import { Logo } from '../Logo';
import { CloseIcon } from '../CloseIcon';

import styles from './styles.module.css';

export type Props = {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
  isMobileMenu?: boolean;
};

export const Modal: React.FC<Props> = ({
  isVisible,
  children,
  onClose,
  isMobileMenu,
}) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isVisible]);

  // TODO: trigger animation by the component mounting and unmounting (framer-motion)
  return (
    <>
      <div
        className={clsx(styles.modal, {
          [styles.open]: isVisible,
          [styles.menu]: isMobileMenu,
          [styles.default]: !isMobileMenu,
        })}
      >
        <div className={clsx(styles.modalContainer)}>
          <div className={clsx(styles.modalHeader, 'blockContainer')}>
            {isMobileMenu && <Logo width={162} height={24} />}

            <button className={styles.closeButton} onClick={onClose}>
              <CloseIcon width={18} height={18} />
            </button>
          </div>
          {children}
        </div>
      </div>

      <Dimmer isVisible={isVisible} onClose={onClose} />
    </>
  );
};
