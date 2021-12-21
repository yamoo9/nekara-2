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
