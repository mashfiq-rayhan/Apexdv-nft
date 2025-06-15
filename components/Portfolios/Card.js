import React from 'react';
import styles from './Card.module.css';

const Card = ({src}) => {
  return (
    <div className={styles.card}>
        <img src={src} alt='image' className={styles.imgs}/>
    </div>
  )
}

export default Card;