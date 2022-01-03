import { useAuthUser } from 'contexts';
import { string } from 'prop-types';
import { useLocation, Navigate } from 'react-router-dom';

/* -------------------------------------------------------------------------- */
/* RequireAuth                                                                */
/* -------------------------------------------------------------------------- */

export const RequireAuth = ({ path = '/signin', children }) => {
  const authUser = useAuthUser();
  const location = useLocation();

  if (!authUser) {
    return <Navigate to={path} state={{ from: location }} replace />;
  }

  return children;
};

RequireAuth.propTypes = {
  path: string,
};
