/* 
  1. ref를 왜 사용할까? (React, Vue)
  - React 앱은 기본적으로 선언형 프로그래밍 사용이 권장되지만
    모든 것을 선언형으로 작성할 수 없습니다.
  - 외부 라이브러리 통합 또는 애니메이션, DOM 스크립트와 같은
    명령형 프로그래밍(실제 DOM 노드에 접근/조작)이 필요할 때가 있습니다.
  - 그러므로 렌더링 이후, DOM 요소에 접근/조작 해야 합니다. (라이프 사이클이 필요한 이유)
  - DOM 요소에 접근/조작 하려면 DOM API를 사용할 수 있지만,
  - React는 ref를 통해 DOM에 접근/조작하는 방법을 제공합니다.
  - 즉, React에서는 ref를 통해 렌더링 이후 DOM 요소를 통해
    접근/조작할 필요가 있습니다. (예: 접근성 준수)

  2. class 컴포넌트에서 ref를 전달 받는 방법
  - 함수 컴포넌트인 경우 React.forwardRef()를 활용하지만,
  - 클래스 컴포넌트의 경우 직접적으로 React.forwardRef() 사용이 어렵다.
  - 해결책 1: 고차 컴포넌트(HOC) 활용
  - 해결책 2: `forwardRef` 또는 `innerRef` prop으로 설정하는 방법
*/

import './TiltCardContainer.css';
import { Component, createRef } from 'react';
import { TiltCard, A11yHidden } from 'components';
import { getTiltCard } from 'api';

/* -------------------------------------------------------------------------- */

export class TiltCardContainer extends Component {
  state = {
    cards: [],
  };

  handleRemoveCard = (id) => {
    this.setState({
      ...this.state,
      cards: this.state.cards.filter((card) => card.id !== id),
    });
  };

  // this.inputRef
  inputRef = createRef(null); // { current: null }

  render() {
    const { cards } = this.state;
    console.log('render: ', this.inputRef);

    return (
      <div className="tiltCardContainer" lang="en">
        <A11yHidden ref={this.a11yHiddenRef}>나는 보이지 않아요.</A11yHidden>
        <div className="tiltCardContainer__buttonGroup">
          {cards.map(({ id, text }) => (
            <button
              key={id}
              type="button"
              className="tiltCardContainer__button"
              onClick={() => this.handleRemoveCard(id)}
            >
              {text} 제거
            </button>
          ))}
        </div>
        <ul className="tiltCardContainer__list">
          {cards.map((card, index) => (
            <li key={card.id}>
              <TiltCard
                // ref={this.inputRef}
                forwardRef={this.inputRef}
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

  async componentDidMount() {
    try {
      const { cards } = await getTiltCard();
      this.setState({ cards });
    } catch ({ message }) {
      console.error(message);
    }

    // console.log('didMount: ', this.inputRef);

    this.inputRef.current.value = 'seulbinim@naver.com';
    this.inputRef.current.focus();
  }
}
