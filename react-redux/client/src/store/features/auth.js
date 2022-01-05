import { signIn } from 'services';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSignIn = createAsyncThunk(
  'auth/signinStatus',
  async (requestData, { distach, getState }) => {
    const { data } = await signIn(requestData);
    const { _id: id, name, email, isAdmin } = data;
    return { id, name, email, isAdmin };
  }
);

const initialState = {
  authUser: null,
  isSignin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInAction(state, action) {
      // state.authUser = action.payload;
      // state.isSignin = true;
    },
    signOutAction(state) {
      state.authUser = null;
      state.isSignin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSignIn.pending, (state, action) => {});
    builder.addCase(fetchSignIn.fulfilled, (state, action) => {
      state.authUser = action.payload;
      state.isSignin = true;
    });
    builder.addCase(fetchSignIn.rejected, (state, action) => {});
  },
});

export const { signInAction, signOutAction } = authSlice.actions;
export default authSlice.reducer;
