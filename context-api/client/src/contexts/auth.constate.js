import { useState, useCallback } from 'react';
import constate from 'constate';

const useAuthentication = () => {
  const [authUser, setAuthUser] = useState(null);

  const signIn = useCallback(
    (responseUserInfo) => setAuthUser(responseUserInfo),
    []
  );
  const signOut = useCallback(() => setAuthUser(null), []);

  return {
    authUser,
    signIn,
    signOut,
  };
};

export const [AuthProvider, useAuthUser, useSignIn, useSignOut] = constate(
  useAuthentication,
  (value) => value.authUser,
  (value) => value.signIn,
  (value) => value.signOut
);
