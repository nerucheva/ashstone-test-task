import React from 'react';
import clsx from 'clsx';

import { Card } from '../Card';
import { CardPops } from '../Card';
import styles from './styles.module.css';

type Props = {
  data: CardPops[];
};

export const CardFeed: React.FC<Props> = ({ data }) => (
  <div className={clsx(styles.cardContainer, 'container')}>
    {data.map((item) => (
      <Card img={item.img} img_2x={item.img_2x} tags={item.tags} title={item.title} autor={item.autor} date={item.date} views={item.views} text={item.text} key={item.title} />
    ))}
  </div>
);
