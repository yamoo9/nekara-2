import { cssVar } from '../lib/cssvar.js';
import { createStore } from '../lib/likeRedux.js';

// state 매개변수는 초깃값을 전달 받아 설정
const initialState = {
  color: cssVar('--color'),
  x: 50,
  y: 50,
};

// 액션 (정보 객체 : 무엇을 수행해서 상태를 업데이트 할 것인가?)

// 리듀서 (순수)함수: 상태 업데이트
// 매개변수: state, action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_UP':
    case 'MOVE_DOWN':
      return {
        ...state,
        y: state.y + action.payload,
      };

    case 'MOVE_LEFT':
    case 'MOVE_RIGHT':
      return {
        ...state,
        x: state.x + action.payload,
      };
    case 'CHANGE_RANDOM_BALL_COLOR':
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
};

// 스토어 생성하기 (← 리듀서 함수)
const store = createStore(reducer);

// 스토어를 구독할 함수
function render() {
  // 스토어 상태 가져오기
  const state = store.getState();
}

// 스토어의 구독 메서드를 사용해 구독할 함수를 구독 설정
store.subscribe(render);

// 스토어 객체의 getState() 메서드를 사용해 상태 값 가져오기
// console.log('디스패치 전:', store.getState());

// 스토어를 통해 사용자가 요구하난 액션을 디스패치 하기
// store.dispatch({ type: 'MOVE_UP' });
// store.dispatch({ type: 'MOVE_DOWN' });
// store.dispatch({ type: 'MOVE_LEFT' });
// store.dispatch({ type: 'MOVE_RIGHT' });

// console.log('디스패치 후:', store.getState());

/* 
  return value:
  
  {
    color: '',
    x: 50,
    y: 50,
  }
*/

// 컨트롤 할 DOM 요소노드
const ball = document.querySelector('.circle');
const output = document.querySelector('pre');

// 구독할 함수 작성
function printState() {
  const state = store.getState();
  output.textContent = JSON.stringify(state, null, 2);
}

printState();

function moveBall() {
  // 상태 가져오기
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

// 함수에서 스토어 상태 업데이트를 구독
store.subscribe(moveBall);
store.subscribe(updateBallColor);
store.subscribe(changeRootNodeCssVar);
store.subscribe(printState);

// moveLeft, ,moveRight 함수 작성
window.moveLeft = function moveLeft(disX) {
  // 상태 업데이트 요청
  store.dispatch({ type: 'MOVE_LEFT', payload: disX });
};

window.moveRight = function moveRight(disX) {
  // 상태 업데이트 요청
  store.dispatch({ type: 'MOVE_RIGHT', payload: disX });
};

window.changeRandomBallColor = function changeRandomBallColor() {
  // 랜덤 RGB → Hexcode 변환
  let red = Math.ceil(Math.random() * 255).toString(16);
  let green = Math.ceil(Math.random() * 255).toString(16);
  let blue = Math.ceil(Math.random() * 255).toString(16);
  let colorValue = `#${red}${green}${blue}`;

  // 새로운 상태로 업데이트 요청
  store.dispatch({
    type: 'CHANGE_RANDOM_BALL_COLOR',
    payload: colorValue,
  });
};
