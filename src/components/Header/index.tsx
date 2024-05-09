import React from 'react';
import clsx from 'clsx';

import { Logo } from '../Logo';
import { Menu } from '../Menu';

import styles from './styles.module.css';

export const Header: React.FC = () => (
  <header>
    <div className={styles.wrapper}>
      <div className={clsx(styles.logoSection, 'container')}>
        <Logo />
        <img className={styles.search} src="src/assets/searchIcon.svg" alt="Search" />
      </div>
    </div>

    <div className={styles.wrapper}>
      <div className={clsx(styles.menuSection, 'container')}>
        <Menu />
      </div>
    </div>
  </header>
);
