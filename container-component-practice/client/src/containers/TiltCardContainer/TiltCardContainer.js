/* eslint-disable no-unused-vars */

import './TiltCardContainer.css';
import { useState, useEffect } from 'react';
import { TiltCard, A11yHidden } from 'components';
import { getTiltCard } from 'api';

export function TiltCardContainer(props) {
  return (
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
  );
}
