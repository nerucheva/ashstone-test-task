import React, { useState } from 'react';
import clsx from 'clsx';
import { Card } from '../Card';
import { Post } from '../Card';
import styles from './styles.module.css';

type Props = {
  data: Post[];
};

export const CardFeed: React.FC<Props> = ({ data }) => {
  const [selectedCard, setSelectedCard] = useState<Post | null>(null);

  const handleCardClick = (card: Post) => {
    setSelectedCard(card);
  };

  return (
    <>
      <div className={clsx(styles.cardContainer, 'container')}>
        {data.map((item) => (
          <div className={styles.postButton} onClick={() => handleCardClick(item)} role="button" key={item.title}>
            <Card img={item.img} img_2x={item.img_2x} tags={item.tags} title={item.title} autor={item.autor} date={item.date} views={item.views} text={item.text} />
          </div>
        ))}
      </div>

      {selectedCard && (
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'pink', height: '100vh' }} onClick={() => setSelectedCard(null)} role="button">
          <Card
            img={selectedCard.img}
            img_2x={selectedCard.img_2x}
            tags={selectedCard.tags}
            title={selectedCard.title}
            autor={selectedCard.autor}
            date={selectedCard.date}
            views={selectedCard.views}
            text={selectedCard.text}
          />
        </div>
      )}
    </>
  );
};
