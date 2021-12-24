import styles from './SkLoading.module.css';
import { useEffect } from 'react';
import { oneOf } from 'prop-types';

// 문서 노드 참조
const startNode = document.getElementById('loading-start');
const endNode = document.getElementById('loading-end');
const renderAsset = (type) => {
  switch (type) {
    default:
    case 'learn':
      return require('./assets/spinner-learn.gif');
    case 'grow':
      return require('./assets/spinner-grow.gif');
    case 'connect':
      return require('./assets/spinner-connect.gif');
  }
};

export function SkLoading({ type }) {
  // 마운트 이후 시점에 명령형 프로그래밍
  useEffect(() => {
    // console.log(startNode);
    // [x] startNode의 role 속성 값을 alert으로 설정
    startNode.setAttribute('role', 'alert');
    // [x] startNode의 자식 노드로 a11yHidden 클래스 이름이 적용된 요소를 삽입
    // [x] 삽입될 자식 노드의 콘텐츠는 사용자에게 안내할 내용을 포함
    startNode.insertAdjacentHTML(
      'beforeend',
      '<span class="a11yHidden">데이터를 로딩 중입니다.</span>'
    );

    // 클린업 함수
    // 언마운트 시점에 명령형 프로그래밍
    return () => {
      // console.log(endNode);
      // [x] startNode의 role 속성을 제거
      startNode.removeAttribute('role');
      // [x] startNode의 자식 노드 제거
      startNode.innerHTML = '';
      // [x] endNode의 자식 노드로 사용자에게 안내할 내용을 포함

      endNode.insertAdjacentHTML(
        'beforeend',
        '<span class="a11yHidden">로딩이 완료되었습니다.</span>'
      );
      // [x] 특정 시간이 지나면 자식 노드 제거
      setTimeout(() => (endNode.innerHTML = ''), 1500);
    };
  }, []);

  return (
    <figure className={styles.component}>
      <img className={styles.image} src={renderAsset(type)} alt="" />
    </figure>
  );
}

SkLoading.defaultProps = {
  type: 'learn',
};

SkLoading.propTypes = {
  type: oneOf(['learn', 'connect', 'grow']),
};
