import { useState } from 'react';
import Image from 'next/image';
import styles from './card.module.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Card({ video, size }) {
  const { name, imgURL = '/static/clifford.webp' } = video;
  const { push } = useRouter();
  const [imgUrl, setImgUrl] = useState(imgURL);
  const classMap = {
    small: styles.smItem,
    medium: styles.mdItem,
    large: styles.lgItem,
  };
  return (
    <motion.div
      className={`${styles.cardItem} ${classMap[size]}`}
      whileHover={{
        scale: 1.1,
      }}
    >
      <Link href={'/video/123'}>
        <>
          <Image
            src={imgUrl}
            layout="fill"
            alt="movie-picture"
            className={styles.cardImg}
            onError={() => setImgUrl('/static/clifford.webp')}
          />
        </>
      </Link>
    </motion.div>
  );
}
