import React from 'react';
import clsx from 'clsx';

import { Modal } from '../Modal';
import { Menu } from '../Menu';
import { Logo } from '../Logo';

import styles from './styles.module.css';

type Props = {
  onClose: () => void;
  isVisible: boolean;
  isMobileMenu?: boolean;
};

export const MobileMenuModal: React.FC<Props> = ({ onClose, isVisible, isMobileMenu }) => (
  <>
    <Modal isVisible={isVisible}>
      <div className={clsx(styles.modalContainer, { [styles.mobileMenu]: isMobileMenu })}>
        <div className={clsx(styles.modalHeader, 'container')}>
          <Logo width="10.08rem" />

          <button onClick={onClose}>
            <img src="src/assets/closeIcon.svg" alt="Close menu" />
          </button>
        </div>
        <Menu isMobile onClick={() => console.log('!')} />
      </div>
    </Modal>

    <div className={clsx(styles.dimmer, { [styles.noDimmer]: !isVisible })} />
  </>
);
