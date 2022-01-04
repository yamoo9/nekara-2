import { cssVar, getRandomColor } from 'utils';

/* -------------------------------------------------------------------------- */
/* 초기 상태                                                                    */
/* -------------------------------------------------------------------------- */

const initialState = {
  x: 50,
  y: 50,
  color: cssVar('--color'),
};

/* -------------------------------------------------------------------------- */
/* 액션 타입                                                                    */
/* -------------------------------------------------------------------------- */

const MOVE_UP = 'ball/MOVE_UP';
const MOVE_DOWN = 'ball/MOVE_DOWN';
const MOVE_LEFT = 'ball/MOVE_LEFT';
const MOVE_RIGHT = 'ball/MOVE_RIGHT';
const CHANGE_RANDOM_BALL_COLOR = 'ball/CHANGE_RANDOM_BALL_COLOR';

/* -------------------------------------------------------------------------- */
/* 액션 크리에이터                                                                */
/* -------------------------------------------------------------------------- */

export const moveUp = (payload) => ({
  type: MOVE_UP,
  payload,
});

export const moveDown = (payload) => ({
  type: MOVE_UP,
  payload,
});

export const moveLeft = (payload) => ({
  type: MOVE_LEFT,
  payload,
});

export const moveRight = (payload) => ({
  type: MOVE_RIGHT,
  payload,
});

export const changeRandomBallColor = () => ({
  type: CHANGE_RANDOM_BALL_COLOR,
  payload: getRandomColor(),
});

/* -------------------------------------------------------------------------- */
/* 리듀서                                                                      */
/* -------------------------------------------------------------------------- */

export default function ballReducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_UP:
    case MOVE_DOWN:
      return {
        ...state,
        y: state.y + action.payload,
      };
    case MOVE_LEFT:
    case MOVE_RIGHT:
      return {
        ...state,
        x: state.x + action.payload,
      };
    case CHANGE_RANDOM_BALL_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
}
