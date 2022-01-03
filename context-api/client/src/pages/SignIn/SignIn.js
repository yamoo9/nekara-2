import 'styled-components/macro';
import { useState, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { string } from 'prop-types';

import { isEmail, isInputed, isPassword, setDocumentTitle } from 'utils';
import { Form } from 'components';
import { signIn } from 'services';
import { useSignIn } from 'contexts';

/* -------------------------------------------------------------------------- */
/* SignIn                                                                     */
/* -------------------------------------------------------------------------- */

export default function SignIn({ id, ...restProps }) {
  const navigate = useNavigate();
  const signInOfContext = useSignIn();

  const formRef = useRef(null);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        if (isEmail(value)) {
          setEmailError('');
          setEmailSuccess(true);
        } else {
          setEmailError('입력한 이메일 주소가 올바르지 않습니다.');
          setEmailSuccess(false);
        }
        setEmail(value);
        break;
      case 'password':
        if (isPassword(value, { min: 8 })) {
          setPasswordError('');
          setPasswordSuccess(true);
        } else {
          setPasswordError(
            '패스워드는 영문, 숫자 조합 8자리 이상 입력해야 합니다.'
          );
          setPasswordSuccess(false);
        }
        setPassword(value);
        break;
      default:
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const formData = new FormData(formRef.current);
      const requestData = {};

      for (let [key, value] of formData.entries()) {
        requestData[key] = value;
      }

      signIn(requestData)
        .then(({ data }) => {
          const { name, email, isAdmin } = data;
          signInOfContext({ name, email, isAdmin });
          navigate('/authorized');
        })
        .catch((error) => console.error(error.message));
    },
    [navigate, signInOfContext]
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
        <Form ref={formRef} aria-labelledby={id} onSubmit={handleSubmit}>
          <Form.Input
            type="email"
            id="userMail"
            label="이메일"
            autoComplete="user-name"
            name="email"
            value={email}
            onChange={handleChange}
            success={emailSuccess}
            error={emailError}
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
            success={passwordSuccess}
            error={passwordError}
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
