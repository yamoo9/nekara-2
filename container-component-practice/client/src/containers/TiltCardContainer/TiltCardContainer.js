import './TiltCardContainer.css';
import { useState, useEffect } from 'react';
import { TiltCard, A11yHidden } from 'components';
import { getTiltCard } from 'api';

export function TiltCardContainer(props) {
  // const [cards, setCards] = useState([]);
  // useEffect(() => getTiltCard().then(({ cards }) => setCards(cards)));

  const [times, setTimes] = useState(0);

  // componentDidMount (1)
  // componentDidUpdate (N)
  // componentWillUnmount (1)

  useEffect(
    /* after mount & update → callback */
    () => {
      // 이벤트 구독
      console.log('이벤트 구독');
      // 타임아웃 설정
      let clearId = setTimeout(() => setTimes(times + 10), 1000);

      return () => {
        // console.log('클린업');
        console.log('이벤트 구독 취소');
        // 타임아웃 클리어
        clearTimeout(clearId);
      };
    },
    /* state dependency array */
    [times]
  );

  return (
    <div className="tiltCardContainer" lang="en" aria-labelledby="tiltcards">
      <A11yHidden id="tiltcards">카드 목록 레이블</A11yHidden>
      <output style={{ display: 'block', margin: 100 }} lang="en">
        {times} times
      </output>
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
  );
}
