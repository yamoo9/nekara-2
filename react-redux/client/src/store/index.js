import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { vowelsApi } from 'services/vowels';
import rootReducer from './features';

// 스토어 생성
export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(vowelsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// 스토어 프로바이더 래퍼 컴포넌트
export const StoreProvider = (props) => {
  return <Provider store={store} {...props} />;
};
