/* 
  React 앱에서 모달 다이어로그 또는 노티피케이션 컴포넌트를 제작할 때 필요한 React 개념

  - 비포커스 요소에 포커스 적용 가능하도록 설정 -> tabIndex
  - React.createRef() -> { current: null }
  - React.forwardRef() 또는 `forwardRef` prop 활용
  - 고차 컴포넌트(Higher order Component, HOC)
  - ref
  - 라이프 사이클 메서드 (didMount, didUpdate 시점 실제 DOM 노드에 접근/조작)
  - ReactDOM.createPortal(vNode, domNode)

*/

import './Dialog.css';
import React from 'react';
import { createPortal } from 'react-dom';

// 모달 다이얼로그 컴포넌트가 차원이동(portal) 렌더링 될 컨테이너 요소(실제 DOM 노드)
// const dialogContainer = document.getElementById('modal-dialog-zone');

// [구독]
// 단, 모달 다이얼로그가 화면에 표시되었을 때:
// 사용자가 ESC 키보드 키를 눌렀을 때
// 모달 다이얼로그를 닫는다.

// [취소]
// 모달 다이얼로그가 화면에서 감춤 처리되었을 때:
// 사용자가 ESC 키보드 키를 눌렀을 때
// 모달 다이얼로그를 닫는 기능이 수행되면 안된다.

// 함수 컴포넌트 이므로 라이프 사이클을 가질 수 없다.
// 함수 → 클래스 컴포넌트로 변경
// 2019 이후 React Hooks의 등장으로
// 함수에서도 라이프 사이클과 유사한 기능을 수행할 수 있다.
export class Dialog extends React.Component {
  render() {
    const { isVisible, onClose, forwardRef } = this.props;

    return createPortal(
      <div
        role="dialog"
        aria-modal="true"
        className="modalDialog"
        aria-hidden={!isVisible}
        aria-label="React Portal﹕모달 다이얼로그"
      >
        <div ref={forwardRef} className="content" tabIndex={-1}>
          <h2>포털</h2>
          <p>
            여기가 <a href="#">React 앱 밖의 세상</a>인가요?!
          </p>
        </div>
        <button
          type="button"
          className="closeDialogButton"
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
        <div role="presentation" className="dim" onClick={onClose} />
      </div>,
      document.body
    );
  }

  unbindKeyEvent = null;

  bindKeyEvent() {
    const handleKeyUp = (e) => {
      console.log(e.key);
      if (e.key === 'Escape') {
        this.props.onClose();
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    // 클린업 함수 (클로저 활용, React Hooks)
    return () => {
      console.log('cleanup');
      /* cleanup closure function */
      document.removeEventListener('keyup', handleKeyUp);
    };
  }

  componentDidMount() {
    // 마운트 시점
    // 이벤트 연결
    console.log('mounted');
    this.unbindKeyEvent = this.bindKeyEvent();
  }

  componentWillUnmount() {
    console.log('will unmount');
    // 이벤트 연결 해제
    this.unbindKeyEvent?.();
  }
}
