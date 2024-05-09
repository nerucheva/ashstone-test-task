import React from 'react';
import clsx from 'clsx';
import { Card } from '../Card';

import styles from './styles.module.css';

// TODO: fetch this data from somewhere outside
const cardContent = [
  {
    image: 'src/assets/cardImg.png',
    alt: 'A man in a stylish look stands stand with his back to the camera on a street',
    category: 'Lifestyle',
    title: 'Eat Right For Your Exercise Regime',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    content: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
  },
  {
    image: 'src/assets/cardImg.png',
    alt: 'A man in a stylish look stands stand with his back to the camera on a street',
    category: 'Lifestyle',
    title: 'Eat Right For Your Exercise Regime',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    content: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
  },
  {
    image: 'src/assets/cardImg.png',
    alt: 'A man in a stylish look stands stand with his back to the camera on a street',
    category: 'Lifestyle',
    title: 'Eat Right For Your Exercise Regime',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    content: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
  },
  {
    image: 'src/assets/cardImg.png',
    alt: 'A man in a stylish look stands stand with his back to the camera on a street',
    category: 'Lifestyle',
    title: 'Eat Right For Your Exercise Regime',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    content: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
  },
  {
    image: 'src/assets/cardImg.png',
    alt: 'A man in a stylish look stands stand with his back to the camera on a street',
    category: 'Lifestyle',
    title: 'Eat Right For Your Exercise Regime',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    content: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
  },
  {
    image: 'src/assets/cardImg.png',
    alt: 'A man in a stylish look stands stand with his back to the camera on a street',
    category: 'Lifestyle',
    title: 'Eat Right For Your Exercise Regime',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    content: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
  },
  {
    image: 'src/assets/cardImg.png',
    alt: 'A man in a stylish look stands stand with his back to the camera on a street',
    category: 'Lifestyle',
    title: 'Eat Right For Your Exercise Regime',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    content: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
  },
  {
    image: 'src/assets/cardImg.png',
    alt: 'A man in a stylish look stands stand with his back to the camera on a street',
    category: 'Lifestyle',
    title: 'Eat Right For Your Exercise Regime',
    author: 'Niek Bove',
    date: 'April 8, 2018',
    views: '3K Views',
    content: `Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…`,
  },
];

export const CardFeed: React.FC = () => (
  <div className={clsx(styles.cardContainer, 'container')}>
    {cardContent.map((item) => (
      <Card
        alt={item.alt}
        image={item.image}
        category={item.category}
        title={item.title}
        author={item.author}
        date={item.date}
        views={item.views}
        content={item.content}
        key={item.title}
      />
    ))}
  </div>
);
