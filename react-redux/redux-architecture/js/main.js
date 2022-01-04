import { cssVar } from '../lib/cssvar.js';
import { createStore } from '../lib/likeRedux.js';

const initialState = {
  color: cssVar('--color'),
  x: 50,
  y: 50,
};

// 액션 타입
const MOVE_UP = 'MOVE_UP';
const MOVE_DOWN = 'MOVE_DOWN';
const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_RIGHT = 'MOVE_RIGHT';
const CHANGE_RANDOM_BALL_COLOR = 'CHANGE_RANDOM_BALL_COLOR';

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

const store = createStore(reducer);

function render() {
  const state = store.getState();
}

store.subscribe(render);

const ball = document.querySelector('.circle');
const output = document.querySelector('pre');

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

store.subscribe(moveBall);
store.subscribe(updateBallColor);
store.subscribe(changeRootNodeCssVar);
store.subscribe(printState);

window.moveLeft = function moveLeft(disX) {
  store.dispatch({ type: MOVE_LEFT, payload: disX });
};

window.moveRight = function moveRight(disX) {
  store.dispatch({ type: MOVE_RIGHT, payload: disX });
};

window.changeRandomBallColor = function changeRandomBallColor() {
  let red = Math.ceil(Math.random() * 255).toString(16);
  let green = Math.ceil(Math.random() * 255).toString(16);
  let blue = Math.ceil(Math.random() * 255).toString(16);
  let colorValue = `#${red}${green}${blue}`;

  store.dispatch({
    type: CHANGE_RANDOM_BALL_COLOR,
    payload: colorValue,
  });
};
