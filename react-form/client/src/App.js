import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Layout } from 'components';
import { Home, SignIn, SignUp } from 'pages';

function PageNotFound(props) {
  return (
    <div role="alert">
      <h2>페이지를 찾을 수가 없습니다.</h2>
      <Link to="/">홈 페이지</Link>로 이동하여 내비게이션 하세요.
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn animate={true} />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="page-not-found" element={<PageNotFound />} />
        <Route
          path="*"
          element={<Navigate to="page-not-found" replace={true} />}
        />
      </Route>
    </Routes>
  );
}
