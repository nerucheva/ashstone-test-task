import React from 'react';
import clsx from 'clsx';

import { Logo } from 'src/components/Logo';
import { Search } from 'src/components/Search';

// TODO: find the way to use absolute path
import menuIcon from '../../../public/menuIcon.svg';

import styles from 'src/components/Header/styles.module.css';

type Props = {
  onClick: () => void;
  searchOnChange: (e: any) => void;
};

export const Header: React.FC<Props> = ({ onClick, searchOnChange }) => (
  <header className={styles.header}>
    <div className={clsx(styles.logoSection, 'container')}>
      <button className={styles.menuButton} onClick={onClick}>
        <img src={menuIcon} alt="Open menu" />
      </button>

      <div className={styles.placeholder} />

      <a className={styles.logoWrapper} href="#" aria-label="Blog – homepage">
        <Logo width="100%" height="auto" />
      </a>

      <Search onChange={searchOnChange} />
    </div>
  </header>
);
