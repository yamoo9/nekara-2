import './Dialog.css';
import React from 'react';
import { createPortal } from 'react-dom';
import { getFocusableChildren } from 'utils';

/* -------------------------------------------------------------------------- */
/* Dialog                                                                     */
/* -------------------------------------------------------------------------- */
export class Dialog extends React.Component {
  dialogRef = React.createRef(null);
  opennerButton = null;

  render() {
    const { isVisible, onClose } = this.props;

    return createPortal(
      <div
        ref={this.dialogRef}
        role="dialog"
        aria-modal="true"
        className="modalDialog"
        aria-hidden={!isVisible}
        aria-label="React Portal﹕모달 다이얼로그"
      >
        <div className="content">
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

    firstFocusableElement.focus();

    let eventType = 'keydown';

    const handleEvent = (e) => {
      const { key, shiftKey, target } = e;

      if (
        Object.is(target, firstFocusableElement) &&
        shiftKey &&
        key === 'Tab'
      ) {
        e.preventDefault();
        lastFocusableElement.focus();
      }

      if (
        Object.is(target, lastFocusableElement) &&
        !shiftKey &&
        key === 'Tab'
      ) {
        e.preventDefault();
        firstFocusableElement.focus();
      }

      if (key === 'Escape') {
        this.props.onClose();
      }
    };

    document.addEventListener(eventType, handleEvent);
    return () => document.removeEventListener(eventType, handleEvent);
  }

  componentDidMount() {
    // 모달 다이얼로그가 화면에 표시되는 시점에 라이프 사이클 메서드 실행
    // 그렇다면? 이 실행 시점에 문서의 현재 활성화 된 요소 노드(document.activeElement)는?
    this.opennerButton = document.activeElement;
    this.unbindKeyEvent = this.bindKeyEvent();
  }

  componentWillUnmount() {
    this.unbindKeyEvent();
    this.opennerButton.focus();
  }
}
