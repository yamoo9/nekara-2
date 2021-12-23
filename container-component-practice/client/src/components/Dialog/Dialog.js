import styles from './Dialog.module.css';
import { useRef, useEffect, useCallback } from 'react';
import {
  // number,
  string,
  bool,
  func,
  // array,
  // object,
  // symbol,
  elementType,
  // element,
  node,
  // instanceOf,
  oneOf,
  oneOfType,
  // arrayOf
  // objectOf
  // shape,
  // exact,
  any,
} from 'prop-types';
import { createPortal } from 'react-dom';
import { getTabbableElements, classNames } from 'utils';

// [비교]
// PropTypes.elementType  VS.  PropTypes.element  VS.  PropTypes.node
//
// PropTypes.elementType = React 컴포넌트(함수 또는 클래스)
// PropTypes.element     = React 요소(JSX, React.createElement())
// PropTypes.node        = React 요소(JSX) 또는 number 또는 string 또는 array 또는 React.Fragment

// [미션]
// 클래스 컴포넌트가 아닌, 함수 컴포넌트 + React 훅을 사용해 동일하게 작동되도록 구성
// - [x]  컴파운드 컴포넌트 → 함수_컴포넌트.컴포넌트 작성
// - [x]  props 검사 → PropTypes 패키지 활용
// - [x]  참조 관리 → React.useRef() 활용
// - [x]  사이드 이펙트 관리 → React.useEffect() 활용
// - [x]  함수 메모(memo: 기억) 관리 → React.useCallback() 활용

const bodyNode = document.body;

export function Dialog({ isVisible, onClose, children, ...restProps }) {
  // 참조 객체 생성
  const dialogRef = useRef(null);
  const opennerButtonRef = useRef(null);

  // 이벤트 리스너
  const handleClose = useCallback(() => {
    onClose();
    opennerButtonRef.current.focus();
  }, [onClose]);

  // 사이드 이펙트 관리
  useEffect(() => {
    // 모달 다이얼로그 오프너 버튼 current 값에 참조
    opennerButtonRef.current = document.activeElement;

    // tabbable 요소들 찾기
    const tabbableElements = getTabbableElements(dialogRef.current);
    const firstTabbableElement = tabbableElements[0];
    const lastTabbableElement = tabbableElements[tabbableElements.length - 1];

    // 첫번째 탭 이동 가능한 요소에 포커싱
    firstTabbableElement.focus();

    // 이벤트 타입
    let eventType = 'keydown';

    // 이벤트 리스너 정의
    const eventListener = (e) => {
      const { key, shiftKey, target } = e;

      if (
        Object.is(target, firstTabbableElement) &&
        shiftKey &&
        key === 'Tab'
      ) {
        e.preventDefault();
        lastTabbableElement.focus();
      }

      if (
        Object.is(target, lastTabbableElement) &&
        !shiftKey &&
        key === 'Tab'
      ) {
        e.preventDefault();
        firstTabbableElement.focus();
      }

      if (key === 'Escape') {
        handleClose();
      }
    };

    // 이벤트 구독
    document.addEventListener(eventType, eventListener);

    // 이펙트 클린업(정리) 함수
    return () => {
      // 이벤트 구독 취소
      document.removeEventListener(eventType, eventListener);
    };
  }, [handleClose]);

  return createPortal(
    <section
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      className={styles.container}
      aria-hidden={!isVisible}
      aria-label="React Portal﹕모달 다이얼로그"
      {...restProps}
    >
      {children}
      <Dialog.CloseButton onClose={handleClose} />
      <Dialog.Dim onClose={handleClose} />
    </section>,
    bodyNode
  );
}
Dialog.propTypes = {
  isVisible: bool,
  onClose: func.isRequired,
  children: node.isRequired,
  restProps: any,
};

/* -------------------------------------------------------------------------- */

Dialog.Dim = function DialogDim({ onClose }) {
  return <div role="presentation" className={styles.dim} onClick={onClose} />;
};
Dialog.Dim.propTypes = {
  onClose: oneOfType([func, oneOf([null, undefined])]),
};

/* -------------------------------------------------------------------------- */

Dialog.Head = function DialogHead({
  as: Comp = 'header',
  className = '',
  ...restProps
}) {
  return <Comp className={classNames(styles.head, className)} {...restProps} />;
};
Dialog.Head.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
  restProps: any,
};

/* -------------------------------------------------------------------------- */

Dialog.Foot = function DialogFoot({
  as: Comp = 'footer',
  className = '',
  ...restProps
}) {
  return <Comp className={classNames(styles.foot, className)} {...restProps} />;
};
Dialog.Foot.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
  restProps: any,
};

/* -------------------------------------------------------------------------- */

Dialog.Main = function DialogMain({
  as: Comp = 'article',
  className = '',
  ...restProps
}) {
  return <Comp className={classNames(styles.main, className)} {...restProps} />;
};
Dialog.Main.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
  restProps: any,
};

/* -------------------------------------------------------------------------- */

Dialog.CloseButton = function DialogCloseButton({ onClose }) {
  return (
    <button
      type="button"
      className={styles.closeButton}
      aria-label="모달 다이얼로그 닫기"
      title="모달 다이얼로그 닫기"
      onClick={onClose}
    >
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
      </svg>
    </button>
  );
};
Dialog.CloseButton.propTypes = {
  onClose: func,
};
