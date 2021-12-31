import 'styled-components/macro';
import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from 'components';

export function SignIn() {
  const [email, setEmail] = useState('yamoo9@naver.com');
  const [password, setPassword] = useState('0000');

  // 컴포넌트가 리 렌더링 될 때 마다, 성능 저하를 막기 위해서
  const handleChange = useCallback((e) => {
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  // 컴포넌트(값) 메모
  const memoizedEmail = useMemo(
    () => (
      <FormInput
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
    ),
    [email, handleChange]
  );

  const memoizedPassword = useMemo(
    () => (
      <FormInput
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
    ),
    [password, handleChange]
  );

  return (
    <>
      <h2>로그인 폼</h2>
      <form
        onSubmit={handleSubmit}
        css={`
          border: 3px solid currentColor;
          border-radius: 4px;
          padding: 2rem;
        `}
      >
        {memoizedEmail}
        {memoizedPassword}
        <button type="submit">로그인</button>
      </form>
      <p>
        회원가입 정보가 없다면? <Link to="/signup">회원가입</Link> 페이지로
        이동해 가입하세요.
      </p>
    </>
  );
}
