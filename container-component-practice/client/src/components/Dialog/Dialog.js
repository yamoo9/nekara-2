import './Dialog.css';
import React from 'react';
import { createPortal } from 'react-dom';
import { getFocusableChildren } from 'utils';

/* -------------------------------------------------------------------------- */
/* Dialog                                                                     */
/* -------------------------------------------------------------------------- */
export class Dialog extends React.Component {
  dialogRef = React.createRef(null);

  render() {
    const { isVisible, onClose, forwardRef } = this.props;

    return createPortal(
      <div
        ref={this.dialogRef}
        role="dialog"
        aria-modal="true"
        className="modalDialog"
        aria-hidden={!isVisible}
        aria-label="React Portal﹕모달 다이얼로그"
      >
        <div ref={forwardRef} className="content" tabIndex={-1}>
          <h2>포털</h2>
          <p>
            여기가 <a href="#here">React 앱 밖의 세상</a>인가요?!
          </p>
          <p>
            <a
              href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              접근 가능한 다이얼로그 컴포넌트
            </a>
            를 만들어야 합니다.
          </p>
          <button type="button" disabled>
            close dialog
          </button>
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

  bindKeyEvent() {
    const focusableElements = getFocusableChildren(this.dialogRef.current);
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    console.log({ firstFocusableElement, lastFocusableElement });

    const handleKeyUp = (e) => {
      if (e.key === 'Escape') {
        this.props.onClose();
      }
    };

    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }

  componentDidMount() {
    this.unbindKeyEvent = this.bindKeyEvent();
  }

  componentWillUnmount() {
    this.unbindKeyEvent();
  }
}
