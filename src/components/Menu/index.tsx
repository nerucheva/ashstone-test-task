import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

const menuContent = [
  {
    title: 'Demos',
    options: [
      { title: 'Demo option 1', link: '#' },
      { title: 'Demo option 2', link: '#' },
      { title: 'Demo option 3', link: '#' },
    ],
  },
  {
    title: 'Post',
    options: [
      { title: 'Post Header', link: '#' },
      { title: 'Post Layout', link: '#' },
      { title: 'Share Buttons', link: '#' },
      { title: 'Gallery Post', link: '#' },
      { title: 'Video Post', link: '#' },
    ],
  },
  {
    title: 'Features',
    options: [
      { title: 'Features option 1', link: '#' },
      { title: 'Features option 2', link: '#' },
      { title: 'Features option 3', link: '#' },
    ],
  },
  {
    title: 'Categories',
    options: [
      { title: 'Style', link: '#' },
      { title: 'Lifestyle', link: '#' },
      { title: 'Events', link: '#' },
      { title: 'Music', link: '#' },
      { title: 'Travel', link: '#' },
    ],
  },
  {
    title: 'Shop',
    options: [
      { title: 'Shop option 1', link: '#' },
      { title: 'Shop option 2', link: '#' },
      { title: 'Shop option 3', link: '#' },
    ],
  },
  {
    title: 'Buy now',
    link: '#',
  },
];

type Props = {
  isMobile?: boolean;
  onClick?: () => void;
};

export const Menu: React.FC<Props> = ({ isMobile = false, onClick }) => (
  <div className={clsx(styles.wrapper, { [styles.menuMobile]: isMobile, [styles.stickySection]: !isMobile })}>
    <nav className={clsx(styles.menuSection, { ['container']: !isMobile })}>
      <ul className={styles.menu}>
        {menuContent.map((item) => (
          <div className={styles.menuItem} key={item.title}>
            {item.link ? (
              <a className={styles.title} href={item.link} key={item.title}>
                {item.title}
              </a>
            ) : (
              <button className={styles.title} onClick={isMobile ? onClick : undefined} key={item.title}>
                <span>{item.title}</span>
                <img className={styles.titleArrow} src="src/assets/chevronIcon.svg" alt="" />
              </button>
            )}

            {item.options ? (
              <ul className={styles.subMenu}>
                {item.options?.map((subitem) => (
                  <li key={subitem.title}>
                    <a className={styles.link} href={subitem.link}>
                      <span>{subitem.title}</span>

                      <img src="src/assets/chevronIcon.svg" alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </ul>
    </nav>
  </div>
);
