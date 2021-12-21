import { isString, typeIs } from './typeIs';

// 컴포넌트 props를 type check 하는 모듈(객체)
export const PropTypes = {
  string(props, propName, componentName) {
    // 조건 확인
    let value = props[propName];
    if (!isString(value)) {
      throw new Error(
        `${componentName} 컴포넌트에 잘못된 ${propName} prop이 전달되었습니다. 
          기대되는 prop 타입은 string 이어야 하나, 전달된 prop 타입은 ${typeIs(
            value
          )} 입니다.`
      );
    }
  },
};
