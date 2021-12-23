// import PropTypes, { any, bool, func, node, oneOf, oneOfType, shape } from 'prop-types';

// [ES 예시]
// Dialog 컴포넌트의 props 객체 모양(shape) 정의
// export const DialogPropTypes = PropTypes.shape({
//   isVisible: PropTypes.bool,
//   onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null, undefined])]),
//   children: PropTypes.node.isRequired,
//   restProps: PropTypes.any,
// });

// [TS 예시]
// interface DialogProp {
//   isVisible?: boolean;
//   onClose?: () => {} | null | undefined;
//   children: ReactNode;
//   [key: string]?: any;
// }
