import React from 'react';

import styles from './styles.module.css';

export type Props = {
  image: string;
  alt: string;
  category: string;
  title: string;
  author: string;
  date: string;
  views: string;
  content: string;
};

export const Card: React.FC<Props> = ({ image, alt, category, title, author, date, views, content }) => (
  <article className={styles.card}>
    {/* TODO: add srcset */}
    <img className={styles.img} src={image} alt={alt} />
    <span className={styles.category}>{category}</span>
    <h2 className={styles.title}>{title}</h2>

    <div className={styles.info}>
      <span>{author}</span>
      <time>{date}</time>
      <span>{views}</span>
    </div>

    <p className={styles.content}>{content}</p>
  </article>
);
