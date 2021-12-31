import { setDocumentTitle } from 'utils';
import { Helmet } from 'react-helmet-async';

export function SignUp() {
  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('회원가입')}</title>
      </Helmet>
      <h2>회원가입</h2>
    </>
  );
}
