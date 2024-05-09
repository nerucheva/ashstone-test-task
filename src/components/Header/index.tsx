import React from 'react';

import { Logo } from '../Logo';
import { Menu } from '../Menu';

import styles from './styles.module.css';

export const Header: React.FC = () => (
  <header>
    <div className={styles.logoSection}>
      <div className="container">
        <Logo />
        <img className={styles.search} src="src/assets/searchIcon.svg" alt="Search" />
      </div>
    </div>

    <div className={styles.menuSection}>
      <div className="container">
        <Menu />
      </div>
    </div>
  </header>
);
