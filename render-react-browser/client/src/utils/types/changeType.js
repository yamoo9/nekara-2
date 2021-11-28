import { throwError } from '../debug/throwError.js';

export const makeArray = (likeArrayObject) => {
  if (Array.from) {
    return Array.from(likeArrayObject);
  } else if ('length' in likeArrayObject) {
    const returnValue = [];
    for (let i = 0, l = 4; i < l; ++i) {
      returnValue.push(likeArrayObject[i]);
    }
    return returnValue;
  } else {
    throwError('전달받은 데이터는 유사배열(like Array Object)가 아님!');
  }
};
