import 'styled-components/macro';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from 'components';

export function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('yamoo9@naver.com');
  const [password, setPassword] = useState('0000');

  useEffect(() => {
    // console.log('emailRef.current = ', emailRef.current);
    // console.log('passwordRef.current = ', passwordRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      default:
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  return (
    <>
      <h2>로그인 폼</h2>
      <form
        css={`
          border: 3px solid currentColor;
          border-radius: 4px;
          padding: 2rem;
        `}
      >
        <FormInput
          forwardRef={emailRef}
          type="email"
          id="userMail"
          label="이메일"
          inputProps={{
            autoComplete: 'user-name',
            name: 'email',
            value: email,
            onChange: handleChange,
          }}
        >
          yamoo9@naver.com
        </FormInput>

        <FormInput
          forwardRef={passwordRef}
          type="password"
          id="userPass"
          label="패스워드"
          inputProps={{
            autoComplete: 'current-password',
            name: 'password',
            value: password,
            onChange: handleChange,
          }}
        >
          대소문자 조합 6자리 이상 입력하세요.
        </FormInput>

        <button type="submit">로그인</button>
      </form>
      <p>
        회원가입 정보가 없다면? <Link to="/signup">회원가입</Link> 페이지로
        이동해 가입하세요.
      </p>
    </>
  );
}
