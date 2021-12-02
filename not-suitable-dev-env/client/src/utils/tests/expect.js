import { hasClass, throwError } from '../../utils/index.js';

export function expect(received) {
  return {
    toBe(expected) {
      if (received !== expected) {
        throwError(
          `전달 값인 ${received}는 기대 값인 ${expected}와 같지 않습니다.`
        );
      }
    },
    toBeInTheDocument() {
      if (!document.body.contains(received)) {
        throwError(`전달 값인 ${received} 노드는 문서에 존재하지 않습니다.`);
      }
    },
    toBeTruthy() {
      if (received !== true) {
        throwError(`전달 값인 ${received}는 true가 아닙니다.`);
      }
    },
    toHasClass(expected) {
      if (!hasClass(received, expected)) {
        throwError(
          `전달 값인 ${received} 노드는 ${expected} 클래스 이름을 포함하지 않습니다.`
        );
      }
    },
  };
}
