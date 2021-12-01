export const logger = ({ message, cssCode, method = 'log' } = {}) => {
  if (!cssCode) {
    console[method](message);
  } else {
    console[method](`%c${message}`, cssCode);
  }
};
