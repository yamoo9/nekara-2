import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const authUser = useSelector(({ auth }) => auth);
  const location = useLocation();

  if (!authUser) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};
