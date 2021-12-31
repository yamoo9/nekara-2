import 'styled-components/macro';
import { useState, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FormInput, A11yHidden } from 'components';
import { setDocumentTitle } from 'utils';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');
  const [gender, setGender] = useState('');

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
      case 'comment':
        setComment(value);
        break;
      case 'gender':
        setGender(value);
        break;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, comment, gender });
  };

  const handleReset = (e) => {
    setEmail('');
    setPassword('');
    setComment('');
    setGender('');
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

  // 파생 상태
  let isAllInputed = !(email.trim().length > 0 && password.trim().length > 0);

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('로그인')}</title>
      </Helmet>
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

        <A11yHidden as="label" htmlFor="gender">
          Gender
        </A11yHidden>
        <select
          name="gender"
          id="gender"
          value={gender}
          onChange={handleChange}
        >
          <option value="">당신의 성별은?</option>
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>

        <A11yHidden as="label" htmlFor="comment">
          Comment
        </A11yHidden>
        <textarea
          css={`
            display: block;
            margin-bottom: 4px;
            resize: vertical;
            width: 100%;
          `}
          name="comment"
          value={comment}
          onChange={handleChange}
          id="comment"
          cols="30"
          rows="10"
        />

        <button type="submit" disabled={isAllInputed}>
          로그인
        </button>
        <button type="reset" onClick={handleReset}>
          입력 초기화
        </button>
      </form>
      <p>
        회원가입 정보가 없다면? <Link to="/signup">회원가입</Link> 페이지로
        이동해 가입하세요.
      </p>
    </>
  );
}
