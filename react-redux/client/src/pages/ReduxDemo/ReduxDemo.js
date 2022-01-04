import styles from './ReduxDemo.module.css';

export default function ReduxDemo(props) {
  const moveLeft = (distanceX) => {};
  const moveRight = (distanceX) => {};
  const changeRandomBallColor = () => {};

  return (
    <>
      <pre className={styles.pre} />

      <div className={styles.buttonGroup}>
        <button
          type="button"
          className={styles.button}
          onClick={() => moveLeft(-5)}
        >
          move Left
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => moveRight(5)}
        >
          move Right
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={changeRandomBallColor}
        >
          Random Change Ball Color
        </button>
      </div>

      <div className={styles.circle} />
    </>
  );
}
