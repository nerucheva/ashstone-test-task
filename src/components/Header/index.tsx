import React from 'react';
import clsx from 'clsx';

import { Logo } from '../Logo';

import styles from './styles.module.css';

type Props = {
  onClose: () => void;
};

export const Header: React.FC<Props> = ({ onClose }) => (
  <header className={styles.header}>
    <div className={clsx(styles.logoSection, 'container')}>
      <button className={styles.menuButton} onClick={onClose}>
        <img src="src/assets/munuIcon.svg" alt="Open menu" />
      </button>

      <a href="#" aria-label="Blog – homepage">
        <Logo />
      </a>
      <img className={styles.search} src="src/assets/searchIcon.svg" alt="Search" />
    </div>
  </header>
);
