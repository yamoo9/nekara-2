import { cssVar } from '../lib/cssvar.js';
import { createStore } from '../lib/likeRedux.js';
import { getRandomColor } from '../lib/getRandomColor.js';

// 초기 상태 값
const initialState = {
  color: cssVar('--color'),
  x: 50,
  y: 50,
};

// 리듀서
const reducer = (state = initialState, action) => {
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
};

// 액션 타입
const MOVE_UP = 'MOVE_UP';
const MOVE_DOWN = 'MOVE_DOWN';
const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_RIGHT = 'MOVE_RIGHT';
const CHANGE_RANDOM_BALL_COLOR = 'CHANGE_RANDOM_BALL_COLOR';

// 스토어 생성
const store = createStore(reducer);

// 문서 객체 참조
const ball = document.querySelector('.circle');
const output = document.querySelector('pre');

// 스토어 구독 함수
function printState() {
  const state = store.getState();
  output.textContent = JSON.stringify(state, null, 2);
}

printState();

function moveBall() {
  const { x, y } = store.getState();
  ball.style.cssText = `
    left: ${x}%;
    top: ${y}:%;
  `;
}

function updateBallColor() {
  const { color } = store.getState();
  ball.style.background = color;
}

function changeRootNodeCssVar() {
  const { color } = store.getState();
  cssVar('--color', color);
}

// 스토어 구독
store.subscribe(moveBall);
store.subscribe(updateBallColor);
store.subscribe(changeRootNodeCssVar);
store.subscribe(printState);

// 전역 공개 함수
window.moveLeft = function moveLeft(disX) {
  store.dispatch({ type: MOVE_LEFT, payload: disX });
};

window.moveRight = function moveRight(disX) {
  store.dispatch({ type: MOVE_RIGHT, payload: disX });
};

window.changeRandomBallColor = function changeRandomBallColor() {
  store.dispatch({
    type: CHANGE_RANDOM_BALL_COLOR,
    payload: getRandomColor(),
  });
};
