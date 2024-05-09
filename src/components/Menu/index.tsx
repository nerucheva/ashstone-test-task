import React from 'react';

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

export const Menu: React.FC = () => (
  <nav>
    <ul className={styles.menu}>
      {menuContent.map((item) => (
        <>
          {item.link ? (
            <a className={styles.menuItem} href={item.link} key={item.link}>
              {item.title}
            </a>
          ) : (
            <button className={styles.menuItem} key={item.title}>
              <span>{item.title}</span>
            </button>
          )}

          <ul className={styles.subMenu}>
            {item.options?.map((subitem) => (
              <li key={subitem.link}>
                <a href={subitem.link}>{subitem.title}</a>
              </li>
            ))}
          </ul>
        </>
      ))}
    </ul>
  </nav>
);
