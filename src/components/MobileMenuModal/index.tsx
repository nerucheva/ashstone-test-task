import React from 'react';

import { Modal } from '../Modal';
import { Menu } from '../Menu';

import styles from './styles.module.css';

type Props = {
  onClose: () => void;
  isVisible: boolean;
};

export const MobileMenuModal: React.FC<Props> = ({ onClose, isVisible }) => (
  <div className={styles.mobileMenuModal}>
    <Modal isVisible={isVisible} onClose={onClose} isMobileMenu>
      <Menu isMobile />
    </Modal>
  </div>
);
