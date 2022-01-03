import { createContext, useMemo, useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [authUser, setAuthUser] = useState(null);

  const value = useMemo(
    () => ({
      authUser,
      setAuthUser,
    }),
    [authUser]
  );

  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 훅은 Auth Context 안에서만 호출 가능합니다.');
  }
  return context;
};

export const useAuthUser = () => {
  const { authUser } = useAuth();
  return authUser;
};

export const useSetAuthUser = () => {
  const { setAuthUser } = useAuth();
  return setAuthUser;
};

export const RequireAuth = ({ children }) => {
  const authUser = useAuthUser();
  const location = useLocation();

  if (!authUser) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};
