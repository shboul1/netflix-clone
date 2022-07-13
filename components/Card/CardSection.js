import React from 'react';
import Card from './Card';
import styles from './card.module.css';
export default function CardSection(props) {
  const { title, videos = [] } = props;
  return (
    <section className="cardSectionWrapper">
      <h1 className={styles.mainTitle}>{title}</h1>
      <div className={styles.cardWrapper}>
        {videos.map((video) => (
          <Card size="large" video={video} />
        ))}
      </div>
    </section>
  );
}
