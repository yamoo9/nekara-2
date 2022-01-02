import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Home, SignIn, SignUp, PageNotFound } from 'pages';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout offset={60} />}>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn id="sign-in" />} />
        <Route path="signup" element={<SignUp id="sign-up" />} />
        <Route path="page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="page-not-found" replace />} />
      </Route>
    </Routes>
  );
}
