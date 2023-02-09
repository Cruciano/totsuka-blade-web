import React from 'react';
import styles from './pressToStart.module.css';

const PressToStart = ({ onClick }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>Press to start</button>
    </div>
  );
};

export default PressToStart;