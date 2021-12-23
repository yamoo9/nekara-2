/* eslint-disable */
import './TiltCardContainer.css';
import { useState } from 'react';
import { TiltCard, A11yHidden } from 'components';
import { getTiltCard } from 'api';

const initialization = () => {
  let countValueKey = 'euid-count';
  let value = localStorage.getItem(countValueKey);
  if (!value) {
    localStorage.setItem(countValueKey, JSON.stringify({ count: 1000 }));
  }
  return value ? JSON.parse(value).count : 100;
};

export function TiltCardContainer(props) {
  // [상태 관리]
  // 여러 상태를 묶어서 관리하는 방법 추천 X
  // 관심사의 분리가 되지 않기 때문
  // 그리고 성능 이슈 문제 유발 (불필요한 리 렌더링 시도)
  // const [count] = useState(10);
  // const [name] = useState('euid');
  const [state, updateState] = useState({
    a: 1,
    b: 2,
    count: 10,
    name: 'euid',
  });

  // 상태 관리 (지연된 초기화(함수) 활용)
  // const [count] = useState(initialization);

  // [사이드 이펙트 관리]

  return (
    <>
      <button
        type="button"
        style={{ display: 'block' }}
        onClick={() =>
          updateState({
            // ...state,
            name: 'yamoo9',
          })
        }
      >
        update name
      </button>
      <output>{state.count}</output> <output>{state.name}</output>
      <div className="tiltCardContainer" lang="en" aria-labelledby="tiltcards">
        <A11yHidden id="tiltcards">카드 목록 레이블</A11yHidden>
        {/* <div className="tiltCardContainer__buttonGroup">
        {cards.map(({ id, text }) => (
          <button
            key={id}
            type="button"
            className="tiltCardContainer__button"
            onClick={() => {}}
          >
            {text} 제거
          </button>
        ))}
      </div> */}
        {/* <ul className="tiltCardContainer__list">
        {cards.map((card, index) => (
          <li key={card.id}>
            <TiltCard
              card={card}
              options={{ 'max-glare': 0.2, 'perspective': 600 }}
            >
              {card.text}
            </TiltCard>
          </li>
        ))}
      </ul> */}
      </div>
    </>
  );
}
