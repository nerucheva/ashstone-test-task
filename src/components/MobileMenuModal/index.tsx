import React from 'react';
import clsx from 'clsx';

import { Modal } from '../Modal';
import { Menu } from '../Menu';
import { Logo } from '../Logo';
import { Dimmer } from '../Dimmer';

import styles from './styles.module.css';

type Props = {
  onClose: () => void;
  isVisible: boolean;
  isMobileMenu?: boolean;
};

export const MobileMenuModal: React.FC<Props> = ({ onClose, isVisible, isMobileMenu }) => (
  <div className={styles.mobileMenuModal}>
    <Modal isVisible={isVisible} width="85%">
      <div className={clsx(styles.modalContainer, { [styles.mobileMenu]: isMobileMenu })}>
        <div className={clsx(styles.modalHeader, 'container')}>
          <Logo width="10.08rem" />

          <button className={styles.closeButton} onClick={onClose}>
            <img src="src/assets/closeIcon.svg" alt="Close menu" />
          </button>
        </div>
        <Menu isMobile />
      </div>
    </Modal>

    <Dimmer isVisible={isVisible} onClose={onClose} />
  </div>
);
