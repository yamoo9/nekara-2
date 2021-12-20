import './Dialog.css';
import React from 'react';
import { createPortal } from 'react-dom';

// 모달 다이얼로그 컴포넌트가 차원이동(portal) 렌더링 될 컨테이너 요소(실제 DOM 노드)
// const dialogContainer = document.getElementById('modal-dialog-zone');

function renderDialog(isVisible, onClose) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="modalDialog"
      aria-hidden={!isVisible}
      aria-label="React Portal﹕모달 다이얼로그"
    >
      <div className="content">
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
      <div role="presentation" className="dim" />
    </div>
  );
}

export const Dialog = ({ isVisible, onClose }) => {
  return isVisible
    ? createPortal(renderDialog(isVisible, onClose), document.body)
    : null;
};
