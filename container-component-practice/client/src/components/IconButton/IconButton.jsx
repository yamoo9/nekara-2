import './IconButton.css';
import { ReactComponent as SvgCheckMark } from 'assets/icons/check-mark.svg';
import { ReactComponent as SvgCross } from 'assets/icons/cross.svg';
import { ReactComponent as SvgNotAllowed } from 'assets/icons/not-allowed.svg';
import { ReactComponent as SvgSpinner } from 'assets/icons/spinner.svg';
import { ReactComponent as SvgUpArrow } from 'assets/icons/up-arrow.svg';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

const STATE = {
  idle: 'idle',
  pending: 'pending',
  resolved: 'resolved',
  rejected: 'rejected',
  disabled: 'disabled',
};

const renderButtonLabel = (state) => {
  const { idle, pending, resolved, rejected, disabled } = STATE;

  switch (state) {
    case pending:
      return (
        <>
          업로드 중 <SvgSpinner />
        </>
      );
    case resolved:
      return (
        <>
          완료 <SvgCheckMark />
        </>
      );
    case rejected:
      return (
        <>
          실패 <SvgCross />
        </>
      );
    case idle:
      return (
        <>
          업로드 <SvgUpArrow />
        </>
      );
    case disabled:
      return (
        <>
          업로드 <SvgNotAllowed />
        </>
      );
    default:
  }
};

export function IconButton({ type, state, className, ...restProps }) {
  return (
    <button
      type={type}
      className={classNames('iconButton', className)}
      disabled={state.includes('disabled')}
      {...restProps}
    >
      {renderButtonLabel(state)}
    </button>
  );
}

IconButton.defaultProps = {
  type: 'button',
  state: STATE.idle,
};
