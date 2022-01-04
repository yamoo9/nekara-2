// initial state
const initialState = null;

// action types
const SIGN_IN = 'auth/SIGN_IN';
const SIGN_OUT = 'auth/SIGN_OUT';

// action creators
export const signInAction = (payload) => ({
  type: SIGN_IN,
  payload,
});

export const signOutAction = () => ({
  type: SIGN_OUT,
});

// reducer
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    case SIGN_OUT:
      return null;
    default:
      return state;
  }
}
