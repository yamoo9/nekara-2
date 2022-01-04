export const createStore = (reducer) => {
  if (typeof reducer !== 'function') {
    throw new Error('createStore 함수는 reducer 함수를 전달 받아야 합니다.');
  }

  // 외부에서 접근이 불가능한 상태
  let state = reducer(undefined, {});

  // 외부에서 스토어를 구독하는 함수의 집합 관리
  let listeners = [];

  // 외부에서 상태를 가져오고자 할 때 사용하는 메서드
  const getState = () => state;

  // 외부에서 사용자가 액션을 받아, 리듀서 함수에 전달
  const dispatch = (action) => {
    // console.log('dispatch 내부:', state, action);
    // 리듀서 함수를 실행해 새로운 상태를 반환
    state = reducer(state, action);

    // 스토어의 상태를 구독 중인 리스너 실행
    listeners.forEach((lilstener) => lilstener?.());
  };

  // 외부의 함수가 스토어의 상태 업데이트를 구독
  // 구독 = 상태 업데이트 감지되면, 함수 실행
  const subscribe = (addListener) => {
    // 구독
    listeners.push(addListener);

    // 구독 해지 (cleanup)
    return () => {
      listeners = listeners.filter((listener) => listener !== addListener);
    };
  };

  // 스토어 객체 반환
  return {
    getState,
    dispatch,
    subscribe,
  };
};
