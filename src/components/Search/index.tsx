import React from 'react';
import { useState } from 'react';
import clsx from 'clsx';

import { SearchIcon } from '../SearchIcon';
import { CloseIcon } from '../CloseIcon';

import styles from './styles.module.css';

type Props = {
  onChange: (e: any) => void;
};

export const Search: React.FC<Props> = ({ onChange }) => {
  const [hideSearch, setHideSearch] = useState(true);

  return (
    <form className={styles.searchContainer}>
      <input
        className={clsx(styles.searchInput, { [styles.hidden]: hideSearch })}
        autoFocus
        type="text"
        autoComplete="off"
        placeholder="Post search"
        onChange={onChange}
      />

      <button
        className={styles.searchButton}
        onClick={() => setHideSearch(!hideSearch)}
        type="button"
      >
        <SearchIcon classNames={clsx(!hideSearch && styles.changeIcon)} />
        <CloseIcon
          classNames={clsx(styles.close, hideSearch && styles.changeIcon)}
        />
      </button>
    </form>
  );
};
