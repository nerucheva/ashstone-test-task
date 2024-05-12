import React from 'react';
import { useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

type Props = {
  onChange: (e) => void;
};

export const Search: React.FC<Props> = ({ onChange }) => {
  const [hideSearch, setHideSearch] = useState(true);

  return (
    <form className={styles.searchContainer}>
      <input className={clsx(styles.searchInput, { [styles.hidden]: hideSearch })} autoFocus type="text" autoComplete="off" placeholder="Post search" onChange={onChange} />

      <button className={styles.searchButton} onClick={() => setHideSearch(!hideSearch)} type="button">
        <img className={clsx(!hideSearch && styles.changeIcon)} src="src/assets/searchIcon.svg" alt="Search" />
        <img className={clsx(styles.close, hideSearch && styles.changeIcon)} src="src/assets/closeIcon.svg" alt="Close search" />
      </button>
    </form>
  );
};
