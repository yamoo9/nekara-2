import { useEffect } from 'react';
import { setDocumentTitle } from 'utils';

export function SignUp() {
  useEffect(() => {
    setDocumentTitle('회원가입');
  }, []);

  return (
    <>
      <h2>회원가입</h2>
    </>
  );
}
