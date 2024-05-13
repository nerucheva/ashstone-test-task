import React from 'react';

import { Modal } from 'src/components/Modal';
import { Menu } from 'src/components/Menu';

import styles from 'src/components/MobileMenuModal/styles.module.css';

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
