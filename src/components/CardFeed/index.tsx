import React, { useState } from 'react';
import clsx from 'clsx';

import { Card } from 'src/components/Card';
import { Post } from 'src/components/Card';
import { Modal } from 'src/components/Modal';

import styles from 'src/components/CardFeed/styles.module.css';

type Props = {
  data: Post[];
};

export const CardFeed: React.FC<Props> = ({ data }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<
    number | undefined
  >();

  const selectedCard =
    selectedCardIndex !== undefined && data[selectedCardIndex];

  return (
    <>
      <div className={clsx(styles.cardContainer, 'container')}>
        {data.map((item, index) => (
          <div
            className={styles.postButton}
            onClick={() => setSelectedCardIndex(index)}
            role="button"
            key={item.title}
            tabIndex={0}
          >
            <Card
              img={item.img}
              img_2x={item.img_2x}
              tags={item.tags}
              title={item.title}
              autor={item.autor}
              date={item.date}
              views={item.views}
              text={item.text}
            />
          </div>
        ))}
      </div>

      <Modal
        onClose={() => setSelectedCardIndex(undefined)}
        isVisible={!!selectedCard}
      >
        {selectedCard && (
          <div className={clsx(styles.cardWrapper, 'blockContainer')}>
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
      </Modal>
    </>
  );
};
