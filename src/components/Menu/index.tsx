import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

type MenuItem = {
  title: string;
  link?: string;
  options?: { title: string; link: string }[];
};

const menuContent: MenuItem[] = [
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
};

export const Menu: React.FC<Props> = ({ isMobile = false }) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 340) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.menuDesktop]: !isMobile,
        [styles.hide]: !isSticky,
      })}
    >
      <nav className={clsx(styles.menuSection, 'container')}>
        <ul className={styles.menu}>
          {menuContent.map((item, index) => (
            <div className={styles.menuItem} key={item.title}>
              {item.link ? (
                <a className={styles.title} href={item.link} key={item.title}>
                  {item.title}
                </a>
              ) : (
                <button
                  className={clsx(styles.title, {
                    [styles.opened]: openSubMenuIndex === index,
                  })}
                  onClick={isMobile ? () => toggleSubMenu(index) : undefined}
                  key={item.title}
                >
                  <span>{item.title}</span>
                  <img
                    className={styles.titleArrow}
                    src="src/assets/chevronIcon.svg"
                    alt=""
                  />
                </button>
              )}

              {item.options ? (
                <ul
                  className={clsx(styles.subMenu, {
                    [styles.opened]: openSubMenuIndex === index,
                  })}
                >
                  <div className={styles.contentWrapper}>
                    {item.options.map((subitem) => (
                      <li key={subitem.title}>
                        <a className={styles.link} href={subitem.link}>
                          <span>{subitem.title}</span>
                          <img src="src/assets/chevronIcon.svg" alt="" />
                        </a>
                      </li>
                    ))}
                  </div>
                </ul>
              ) : null}
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};
