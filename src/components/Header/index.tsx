import React from 'react';

import { Logo } from '../Logo';

import styles from './styles.module.css';

export const Header: React.FC = () => (
  <div>
    <div className={styles.logoSection}>
      <Logo />
      <img className={styles.search} src="src/assets/searchIcon.svg" alt="Search" />
    </div>
    <div></div>
  </div>
);
