import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
export default function Banner(props) {
  const { title, subTitle } = props;
  const handlePlayBtn = () => {
    console.log('Clicked!');
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>{subTitle}</p>
      <button className={styles.playButton} onClick={handlePlayBtn}>
        <Image width={20} height={20} src="/static/play_arrow.svg" />
        play
      </button>
    </div>
  );
}
