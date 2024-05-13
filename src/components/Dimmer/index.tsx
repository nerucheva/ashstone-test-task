import React from 'react';
import clsx from 'clsx';

import styles from 'src/components/Dimmer/styles.module.css';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export const Dimmer: React.FC<Props> = ({ isVisible, onClose }) => (
  <div
    className={clsx(styles.dimmer, { [styles.noDimmer]: !isVisible })}
    onClick={onClose}
    role="button"
  />
);
