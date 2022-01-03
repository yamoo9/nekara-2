import { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { Loading, RequireAuth } from 'components';

/* -------------------------------------------------------------------------- */
/* Lazy Loaded Components                                                     */
/* -------------------------------------------------------------------------- */

const Home = lazy(() => import('./pages/Home/Home'));
const Layout = lazy(() => import('./pages/Layout/Layout'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Authorized = lazy(() => import('./pages/Authorized/Authorized'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));

/* -------------------------------------------------------------------------- */
/* App                                                                        */
/* -------------------------------------------------------------------------- */

export default function App() {
  const routeElement = useRoutes([
    {
      element: <Layout offset={160} />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'signin', element: <SignIn id="signin" /> },
        { path: 'signup', element: <SignUp id="signup" /> },
        {
          path: 'authorized',
          element: (
            <RequireAuth>
              <Authorized />
            </RequireAuth>
          ),
        },
        { path: 'page-not-found', element: <PageNotFound /> },
        { path: '*', element: <Navigate to="page-not-found" replace /> },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loading message="페이지를 로딩 중입니다" />}>
      {routeElement}
    </Suspense>
  );
}
