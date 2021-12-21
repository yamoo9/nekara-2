import styles from './SkLoading.module.css';
import React from 'react';

// Class 컴포넌트 대체: React Hooks + Functioncal Component
export function SkLoading() {
  return (
    <figure class={styles.component}>
      <img
        class={styles.image}
        src={require(`${process.env.PUBLIC_URL}/assets/spinner/spinner-learn.gif`)}
        alt=""
      />
    </figure>
  );
}
