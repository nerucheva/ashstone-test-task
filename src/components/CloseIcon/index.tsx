import React from 'react';

type Props = {
  classNames?: string;
};

export const CloseIcon: React.FC<Props> = ({ classNames }) => (
  <svg
    fill="none"
    viewBox="0 0 21 21"
    className={classNames}
    role="img"
    aria-label="close"
  >
    <path
      fill="currentColor"
      d="M19.07 1.293 18.365 2l.707-.707Zm0 1.414.708.707-.707-.707Zm-1.413-1.414-.708-.707.707.707Zm-7.475 7.475-.707.707a1 1 0 0 0 1.414 0l-.707-.707ZM2.707 1.293l.707-.707-.707.707Zm-1.414 0L2 2l-.707-.707Zm0 1.414-.707.707.707-.707Zm7.475 7.475.707.707a1 1 0 0 0 0-1.414l-.707.707Zm-7.475 7.475-.707-.708.707.707Zm0 1.414L2 18.364l-.707.707Zm1.414 0 .707.707-.707-.707Zm7.475-7.475.707-.707a1 1 0 0 0-1.414 0l.707.707Zm7.475 7.475-.708.707.707-.707Zm1.414-1.415.707-.707-.707.707Zm-7.475-7.474-.707-.707a1 1 0 0 0 0 1.414l.707-.707ZM18.364 2l1.414 1.414a2 2 0 0 0 0-2.828L18.364 2Zm0 0L19.778.586a2 2 0 0 0-2.829 0L18.364 2Zm-7.475 7.475L18.364 2 16.949.586 9.475 8.06l1.414 1.415ZM2 2l7.475 7.475 1.414-1.415L3.414.586 2 2Zm0 0L3.414.586a2 2 0 0 0-2.828 0L2 2Zm0 0L.586.586a2 2 0 0 0 0 2.828L2 2Zm7.475 7.475L2 2 .586 3.414 8.06 10.89l1.415-1.414ZM2 18.364l7.475-7.475L8.06 9.475.586 16.949 2 18.364Zm0 0L.586 16.949a2 2 0 0 0 0 2.829L2 18.364Zm0 0L.586 19.778a2 2 0 0 0 2.828 0L2 18.364Zm7.475-7.475L2 18.364l1.414 1.414 7.475-7.475-1.414-1.414Zm8.889 7.475-7.475-7.475-1.414 1.414 7.474 7.475 1.415-1.414Zm0 0-1.415 1.414a2 2 0 0 0 2.829 0l-1.414-1.414Zm0 0 1.414 1.414a2 2 0 0 0 0-2.829l-1.414 1.415Zm-7.475-7.475 7.475 7.475 1.414-1.415-7.475-7.474-1.414 1.414ZM18.364 2l-7.475 7.475 1.414 1.414 7.475-7.475L18.364 2Z"
    />
  </svg>
);