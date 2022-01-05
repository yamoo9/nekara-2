import { Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { lazyComponent } from 'utils';
import { Loading, RequireAuth } from 'components';

/* -------------------------------------------------------------------------- */
/* Lazy Loaded Components                                                     */
/* -------------------------------------------------------------------------- */

const Home = lazyComponent('Home');
const Layout = lazyComponent('Layout');
const SignIn = lazyComponent('SignIn');
const SignUp = lazyComponent('SignUp');
const ReduxDemo = lazyComponent('ReduxDemo');
const Vowels = lazyComponent('Vowels');
const Vowel = lazyComponent('Vowel');
const Authorized = lazyComponent('Authorized');
const PageNotFound = lazyComponent('PageNotFound');

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
        { path: 'redux-demo', element: <ReduxDemo /> },
        { path: 'vowels', element: <Vowels /> },
        { path: 'vowel/:id', element: <Vowel /> },
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
