import React from 'react';

import styles from './styles.module.css';

export type Post = {
  img: string;
  img_2x: string;
  tags: string;
  title: string;
  autor: string;
  date: string;
  views: string;
  text: string;
};

export const Card: React.FC<Post> = ({
  img,
  img_2x,
  tags,
  title,
  autor,
  date,
  views,
  text,
}) => (
  <article className={styles.card}>
    <img className={styles.img} src={img} srcSet={`${img_2x} 2x`} alt={title} />
    <span className={styles.tags}>{tags}</span>
    <h2 className={styles.title}>{title}</h2>

    <div className={styles.info}>
      <span>{autor}</span>
      <time>{date}</time>
      <span>{views}</span>
    </div>

    <p className={styles.text}>{text}</p>
  </article>
);
