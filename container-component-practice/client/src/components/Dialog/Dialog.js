import './Dialog.css';
import React from 'react';

export const Dialog = ({ isVisible }) => {
  return isVisible ? (
    <div
      role="dialog"
      aria-modal="true"
      className="modalDialog"
      aria-hidden="true"
      aria-label="React Portal﹕모달 다이얼로그"
    >
      <div className="content">
        <h2>포털</h2>
        <p>여기가 React 앱 밖의 세상인가요?!</p>
      </div>
      <button
        type="button"
        className="closeDialogButton"
        aria-label="모달 다이얼로그 닫기"
        title="모달 다이얼로그 닫기"
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
        </svg>
      </button>
      <div role="presentation" className="dim" />
    </div>
  ) : null;
};
