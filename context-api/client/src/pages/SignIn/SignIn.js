import 'styled-components/macro';
import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

import { isInputed, setDocumentTitle } from 'utils';
import { Form } from 'components';

/* -------------------------------------------------------------------------- */
/* SignIn                                                                     */
/* -------------------------------------------------------------------------- */
export default function SignIn({ id, ...restProps }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log({ email, password });
    },
    [email, password]
  );

  const handleReset = useCallback((e) => {
    setEmail('');
    setPassword('');
  }, []);

  let isAllInputed = isInputed(email) && isInputed(password);

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('로그인')}</title>
      </Helmet>

      <Form.Container>
        <Form.Headline id={id}>로그인 폼</Form.Headline>
        <Form aria-labelledby={id} onSubmit={handleSubmit}>
          <Form.Input
            type="email"
            id="userMail"
            label="이메일"
            autoComplete="user-name"
            name="email"
            value={email}
            onChange={handleChange}
          >
            계정 이메일 주소를 올바르게 입력하세요.
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
            계정 비밀번호를 입력하세요.
          </Form.Input>
          <Form.Button callToAction type="submit" disabled={!isAllInputed}>
            로그인
          </Form.Button>
          <Form.Button type="reset" onClick={handleReset}>
            초기화
          </Form.Button>
        </Form>

        <Form.Info>
          회원가입한 적이 없다면? <Link to="/signup">회원가입</Link> 페이지로
          이동해 가입하세요.
        </Form.Info>
      </Form.Container>
    </>
  );
}

SignIn.propTypes = {
  id: string.isRequired,
};
