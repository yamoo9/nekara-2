import React from 'react';
import { getTiltCard } from 'api';

class App extends React.Component {
  state = {
    tiltCards: [],
  };

  render() {
    return (
      <div className="container">
        <h1 style={{ fontSize: 24, textAlign: 'center' }}>틸트 카드 리스트</h1>
      </div>
    );
  }

  componentDidMount() {
    getTiltCard().then(({ cards }) =>
      this.setState({
        tiltCards: cards,
      })
    );
  }
}

export default App;
