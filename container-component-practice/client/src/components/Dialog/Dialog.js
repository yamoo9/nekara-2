import styles from './Dialog.module.css';
import React from 'react';
import { createPortal } from 'react-dom';
import { getTabbableElements, classNames } from 'utils';

export class Dialog extends React.Component {
  // 컴파운드 컴포넌트 (클래스 멤버)
  static Dim = function DialogDim({ onClose }) {
    return <div role="presentation" className={styles.dim} onClick={onClose} />;
  };

  static Head = function DialogHead({
    as: Comp = 'header',
    className = '',
    ...restProps
  }) {
    return (
      <Comp className={classNames(styles.head, className)} {...restProps} />
    );
  };

  static Foot = function DialogFoot({
    as: Comp = 'footer',
    className = '',
    ...restProps
  }) {
    return (
      <Comp className={classNames(styles.foot, className)} {...restProps} />
    );
  };

  static Main = function DialogMain({
    as: Comp = 'article',
    className = '',
    ...restProps
  }) {
    return (
      <Comp className={classNames(styles.main, className)} {...restProps} />
    );
  };

  static CloseButton = function DialogCloseButton({
    onClose = null,
    ...restProps
  }) {
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

  dialogRef = React.createRef(null);
  opennerButton = null;

  render() {
    const { isVisible, children } = this.props;

    return createPortal(
      <section
        ref={this.dialogRef}
        role="dialog"
        aria-modal="true"
        className={styles.container}
        aria-hidden={!isVisible}
        aria-label="React Portal﹕모달 다이얼로그"
      >
        {children}
        <Dialog.CloseButton onClose={this.close} />
        <Dialog.Dim onClose={this.close} />
      </section>,
      document.body
    );
  }

  close = () => {
    this.props.onClose();
    this.opennerButton.focus();
  };

  bindKeyEvent() {
    const tabbableElements = getTabbableElements(this.dialogRef.current);
    const firstTabbableElement = tabbableElements[0];
    const lastTabbableElement = tabbableElements[tabbableElements.length - 1];

    firstTabbableElement.focus();

    let eventType = 'keydown';

    const handleEvent = (e) => {
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
        this.close();
      }
    };

    document.addEventListener(eventType, handleEvent);
    return () => document.removeEventListener(eventType, handleEvent);
  }

  componentDidMount() {
    this.opennerButton = document.activeElement;
    this.unbindKeyEvent = this.bindKeyEvent();
  }

  componentWillUnmount() {
    this.unbindKeyEvent();
    // this.opennerButton.focus();
  }
}
