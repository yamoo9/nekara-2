import './TiltCardContainer.css';
import { useState, useEffect } from 'react';
import { TiltCard, A11yHidden } from 'components';
import { getTiltCard } from 'api';

/* -------------------------------------------------------------------------- */
// React Hooks + Functioncal Component
// 상태 state, 사이드 이펙트 effects
// 네트워크 통신
// DOM 요소 접근/조작 (외부 라이브러리 통합)
// 이벤트 구독/취소

export function TiltCardContainer(props) {
  // 함수 컴포넌트의 상태???
  // React Hooks - state hook

  // 관심사의 분리
  // 어떤 상태를 관리할 것인가?
  const [cards, setCards] = useState([]);

  // 함수 컴포넌트에서 라이프 사이클 메서드??
  // 사이드 이펙트 관리
  // 특정 시점에 호출되는 콜백
  useEffect(
    /* componentDidMount */ () => {
      // 이 구간에서 함수 안일지라도 마운트 이후에 콜백되므로
      // 클래스 컴포넌트의 라이프 사이클 메서드를 대체
      getTiltCard().then(({ cards }) => setCards(cards));

      // 상태 변경??
      // 리엑트 Fiber 알고리즘이 React 컴포넌트를 다시 렌더링 시도 → UI 업데이트 렌더링
    }
  );

  return (
    <div className="tiltCardContainer" lang="en" aria-labelledby="tiltcards">
      <A11yHidden id="tiltcards">카드 목록 레이블</A11yHidden>
      <div className="tiltCardContainer__buttonGroup">
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
      </div>
      <ul className="tiltCardContainer__list">
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
      </ul>
    </div>
  );
}
