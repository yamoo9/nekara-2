import 'styled-components/macro';
import { useState, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { string } from 'prop-types';

import { signUp } from 'services';
import { setDocumentTitle, isEmail, isPassword, isCheck } from 'utils';
import { Form } from 'components';

/* -------------------------------------------------------------------------- */
/* SignUp                                                                     */
/* -------------------------------------------------------------------------- */

export default function SignUp({ id, ...restProps }) {
  const navigate = useNavigate();

  const formRef = useRef(null);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [nameSuccess, setNameSuccess] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const [passwordConfirmSuccess, setPasswordConfirmSuccess] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      switch (name) {
        case 'name':
          let isInputedKorean = isCheck(value, isCheck.types[3]);
          let isValidLength = value.length > 1;

          if (isInputedKorean) {
            setNameError('');
            setNameSuccess(false);
          } else {
            setNameError('한글만 입력하세요.');
            setNameSuccess(false);
          }
          if (!isValidLength) {
            setNameError('이름은 2글자 이상 입력하세요.');
            setNameSuccess(false);
          }
          if (isInputedKorean && isValidLength) {
            setNameSuccess(true);
          }
          setName(value);
          break;

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

        case 'passwordConfirm':
          if (password === value) {
            setPasswordConfirmError('');
            setPasswordConfirmSuccess(true);
          } else {
            setPasswordConfirmError('입력한 패스워드와 동일하지 않습니다.');
            setPasswordConfirmSuccess(false);
          }
          setPasswordConfirm(value);
          break;
        default:
      }
    },
    [password]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const formData = new FormData(formRef.current);
      const requestFormData = {};

      for (let [key, value] of formData.entries()) {
        if (key !== 'passwordConfirm') {
          requestFormData[key] = value;
        }
      }

      signUp(requestFormData)
        .then((response) => navigate('/'))
        .catch((error) => console.error(error.message));
    },
    [navigate]
  );

  const handleReset = useCallback((e) => {
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  }, []);

  let isAllSuccess =
    nameSuccess && emailSuccess && passwordSuccess && passwordConfirmSuccess;

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('회원가입')}</title>
      </Helmet>

      <Form.Container>
        <Form.Headline id={id}>회원가입 폼</Form.Headline>
        <Form ref={formRef} aria-labelledby={id} onSubmit={handleSubmit}>
          <Form.Input
            id="userName"
            label="이름"
            autoComplete="user-name"
            name="name"
            value={name}
            onChange={handleChange}
            error={nameError}
            success={nameSuccess}
          >
            이름을 작성합니다. (한글 2자리 이상)
          </Form.Input>
          <Form.Input
            type="email"
            id="userMail"
            label="이메일"
            autoComplete="user-email"
            name="email"
            value={email}
            onChange={handleChange}
            error={emailError}
            success={emailSuccess}
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
            error={passwordError}
            success={passwordSuccess}
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
            error={passwordConfirmError}
            success={passwordConfirmSuccess}
          >
            입력한 비밀번호와 동일한 번호를 다시 입력하세요.
          </Form.Input>
          <Form.Button callToAction type="submit" disabled={!isAllSuccess}>
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
