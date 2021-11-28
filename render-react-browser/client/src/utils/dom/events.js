import {
  isElementNode,
  isString,
  isObject,
  throwError,
} from '../../utils/index.js';

export function on(node, eventType, eventListener, eventOptions = false) {
  if (isElementNode(node)) {
    if (isString(eventType)) {
      console.log('eventType is string');
      node.addEventListener(eventType, eventListener, eventOptions);
      return function off() {
        node.removeEventListener(eventType, eventListener, eventOptions);
      };
    }
    if (isObject(eventType)) {
      console.log('eventType is object');
      // 메모(memoization, 기억하다)
      const memoEventTypeAndListeners = {};

      // 객체 순환
      // for(let prop in object) {}
      for (let key in eventType) {
        // 객체 자신(own) 속성만 순환하는 것이 성능에 좋아
        if (Object.hasOwnProperty.call(eventType, key)) {
          let type = key;
          let listener = eventType[key];

          // 순환될 때의 key, listener
          memoEventTypeAndListeners[key] = listener;

          // 재귀 호출 사용하지 않을 경우
          // node.addEventListener('mouseenter', listener, eventOptions);

          // 재귀 호출 사용 시
          on(node, type, listener, eventOptions);
        }
      }
      // 반환되는 함수는 모든 연결된 이벤트 타입을 해제할 수 있어야 한다.
      return (willRemoveEventType) => {
        // 객체 순환
        // for - in
        // Object.entries
        Object.entries(memoEventTypeAndListeners).forEach(
          ([type, listener]) => {
            if (!willRemoveEventType) {
              console.log(`remove event type: ${type}`);
              node.removeEventListener(type, listener, eventOptions);
            }
            if (willRemoveEventType === type) {
              console.log(`remove event type: ${type}`);
              node.removeEventListener(
                willRemoveEventType,
                listener,
                eventOptions
              );
            }
          }
        );
      };
    }
    // return undefined
  } else {
    throwError('...');
  }
}

export function off(node, eventType, eventListener, eventOptions = false) {
  if (isElementNode(node)) {
    node.removeEventListener(eventType, eventListener, eventOptions);
  } else {
    throwError('...');
  }
}

export function once(node, eventType, eventListener) {
  on(node, eventType, eventListener, { once: true });
}
