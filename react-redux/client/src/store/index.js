import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ballReducer from './slices/ball';

// 스토어 생성
export const store = createStore(
  ballReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 스토어 프로바이더 래퍼 컴포넌트
export const StoreProvider = (props) => {
  return <Provider store={store} {...props} />;
};
