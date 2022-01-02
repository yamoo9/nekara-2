import 'styled-components/macro';
import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

import { isInputed, setDocumentTitle } from 'utils';
import { Form } from 'components';

/* -------------------------------------------------------------------------- */
/* SignUp                                                                     */
/* -------------------------------------------------------------------------- */
export default function SignUp({ id, ...restProps }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'passwordConfirm':
        setPasswordConfirm(value);
        break;
      default:
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log({ name, email, password, passwordConfirm });
    },
    [name, email, password, passwordConfirm]
  );

  const handleReset = useCallback((e) => {
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  }, []);

  let isAllInputed = isInputed(name) && isInputed(email) && isInputed(password);

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('회원가입')}</title>
      </Helmet>

      <Form.Container>
        <Form.Headline id={id}>회원가입 폼</Form.Headline>
        <Form aria-labelledby={id} onSubmit={handleSubmit}>
          <Form.Input
            id="userName"
            label="이름"
            autoComplete="user-name"
            name="name"
            value={name}
            onChange={handleChange}
          >
            이름을 작성합니다. (영문, 숫자 조합 6자리 이상)
          </Form.Input>
          <Form.Input
            type="email"
            id="userMail"
            label="이메일"
            autoComplete="user-email"
            name="email"
            value={email}
            onChange={handleChange}
          >
            이메일 주소를 올바르게 입력하세요.
          </Form.Input>
          <Form.Input
            type="password"
            id="userPass"
            label="패스워드"
            autoComplete="current-password"
            name="password"
            value={password}
            onChange={handleChange}
          >
            비밀번호를 입력하세요. (영문, 숫자 조합 8자리 이상)
          </Form.Input>
          <Form.Input
            type="password"
            id="userPassConfirm"
            label="패스워드 확인"
            autoComplete="current-confirm-password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handleChange}
          >
            입력한 비밀번호와 동일한 번호를 다시 입력하세요.
          </Form.Input>
          <Form.Button callToAction type="submit" disabled={!isAllInputed}>
            회원가입
          </Form.Button>
          <Form.Button type="reset" onClick={handleReset}>
            초기화
          </Form.Button>
        </Form>

        <Form.Info>
          이미 회원가입 했다면? <Link to="/signin">로그인</Link> 페이지로 이동해
          로그인하세요.
        </Form.Info>
      </Form.Container>
    </>
  );
}

SignUp.propTypes = {
  id: string.isRequired,
};
