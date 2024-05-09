import React from 'react';
import clsx from 'clsx';

import { Logo } from '../Logo';

import styles from './styles.module.css';

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={clsx(styles.logoSection, 'container')}>
      <Logo />
      <img className={styles.search} src="src/assets/searchIcon.svg" alt="Search" />
    </div>
  </header>
);
