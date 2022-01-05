###### 네카라쿠배 2기
# Redux / React Redux / RTK / RTK Query

React 애플리케이션 실행 중, Redux를 사용해 상태를 관리하는 방법을 학습합니다.

- [x]  Redux 아키텍처
  - [x]  [createStore](https://redux.js.org/api/createstore)
  - [x]  [getState](https://redux.js.org/api/store#getstate)
  - [x]  [reducer](https://redux.js.org/understanding/thinking-in-redux/glossary#reducer)
  - [x]  [dispatch(action)](https://redux.js.org/api/store#dispatchaction)
  - [x]  [subscribe → unsubscribe](https://redux.js.org/api/store#subscribelistener)
- [x]  Redux 개발 도구 확장(Redux Devtools extension)
  - [x]  [window.__REDUX_DEVTOOLS_EXTENSION__](https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store)
  - [ ]  [redux-devtools-extension → composeWithDevTools](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm)
- [x]  React 애플리케이션에서의 Redux 통합
  - [x]  [Provider](https://react-redux.js.org/api/provider)
  - [x]  [useSelector](https://react-redux.js.org/api/hooks#useselector)
  - [x]  [useDispatch](https://react-redux.js.org/api/hooks#usedispatch)
  - [ ]  ReduxDemo 페이지 트러블 슈팅
    - [ ]  Redux 상태에서 필요한 특정 상태를 추출해 사용
    - [ ]  액션 디스패치(요청) → 상태 업데이트 완료 → 처리가 필요한 경우
- [x]  Redux 상태 관리
  - [x]  [combinReducers](https://redux.js.org/api/combinereducers)
  - [x]  루트 리듀서 병합
  - [x]  중첩 리듀서 병합
- [ ] Redux 미들웨어 ([applyMiddleware](https://redux.js.org/api/applymiddleware))
  - [ ]  사용자 정의 미들웨어 (logger, asyncAction)
- [ ]  Redux 비동기 액션(Asunc action)
  - [ ]  [Thunk](https://www.npmjs.com/package/redux-thunk) 미들웨어 활용 ([thunk middleware](https://redux.js.org/api/applymiddleware#example-using-thunk-middleware-for-async-actions))
  - [ ]  Thunk 활용법 ([Guide 참고](https://redux.js.org/usage/writing-logic-thunks#thunk-usage-patterns))
- [ ]  Redux Toolkit 활용
  - [ ]  [configureStore](https://redux-toolkit.js.org/api/configureStore#usage)
  - [ ]  [createAction](https://redux-toolkit.js.org/api/createAction)
  - [ ]  [createReducer](https://redux-toolkit.js.org/api/createReducer)
  - [ ]  [createSlice](https://redux-toolkit.js.org/api/createSlice)
  - [ ]  [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)
- [ ]  Redux Toolkit Query 활용
  - [ ]  [createApi](https://redux-toolkit.js.org/rtk-query/api/createApi)
  - [ ]  [fetchBaseQuery](https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery)