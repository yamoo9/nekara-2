import 'styled-components/macro';
import { useEffect } from 'react';
import { string } from 'prop-types';
import { Bars } from 'react-loading-icons';
import { getPrimaryColor } from 'styles/utils';

const loadingStartNode = document.getElementById('loading-start');
const loadingEndNode = document.getElementById('loading-end');

/* -------------------------------------------------------------------------- */
/* Loading                                                                    */
/* -------------------------------------------------------------------------- */

export function Loading({ message }) {
  useEffect(() => {
    loadingStartNode.setAttribute('role', 'alert');
    loadingStartNode.insertAdjacentHTML(
      'beforeend',
      /* html */ `<span class="a11yHidden">${message}</span>`
    );

    return () => {
      loadingStartNode.removeAttribute('role');
      loadingStartNode.innerHTML = '';

      loadingEndNode.insertAdjacentHTML(
        'beforeend',
        /* html */ `<span class="a11yHidden">로딩이 종료되었습니다.</span>`
      );
      setTimeout(() => (loadingEndNode.innerHTML = ''), 800);
    };
  }, [message]);

  return (
    <Bars
      height="5rem"
      fill={getPrimaryColor(200)}
      fillOpacity={0.7}
      css={`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
    />
  );
}

Loading.propTypes = {
  message: string.isRequired,
};
