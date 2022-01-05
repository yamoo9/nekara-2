import styles from './ReduxDemo.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { cssVar, setDocumentTitle } from 'utils';
import {
  moveLeft as moveLeftAction,
  moveRight as moveRightAction,
  changeRandomBallColor as changeRandomBallColorAction,
} from 'store/slices/ball';
import { useLayoutEffect } from 'react';

export default function ReduxDemo(props) {
  // Redux 상태를 가져오기
  const state = useSelector((state) => state.ball);

  // Redux 상태 업데이트를 요청할 dispatch 함수 가져오기
  const dispatch = useDispatch();

  const moveLeft = (distanceX) => {
    dispatch(moveLeftAction(distanceX));
  };

  const moveRight = (distanceX) => {
    dispatch(moveRightAction(distanceX));
  };

  const changeRandomBallColor = () => {
    dispatch(changeRandomBallColorAction());
  };

  useLayoutEffect(() => {
    cssVar('--color', state.color);
  }, [state.color]);

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('Redux 데모')}</title>
      </Helmet>

      <pre className={styles.pre}>{JSON.stringify(state, null, 2)}</pre>

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

      <div
        className={styles.circle}
        style={{
          left: `${state.x}%`,
          top: `${state.y}%`,
          background: state.color,
        }}
      />
    </>
  );
}
