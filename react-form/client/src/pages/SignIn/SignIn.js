import { Layout } from 'components';
import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <Layout>
      <h2>로그인</h2>
      <p>
        회원가입 정보가 없다면? <Link to="/signup">회원가입</Link> 페이지로
        이동해 가입하세요.
      </p>
    </Layout>
  );
}
