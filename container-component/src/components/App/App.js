import './App.css';
import { Component } from 'react';
import { AppHeader } from 'components';

export default class App extends Component {
  state = {
    isShowHeader: true,
    brand: {
      label: 'React',
      className: 'App-logo',
    },
  };

  render() {
    const { brand, isShowHeader } = this.state;

    return (
      <div className="App">
        {isShowHeader ? (
          <AppHeader brand={brand} />
        ) : (
          '이런... 자식 노드가 없습니다.'
        )}
      </div>
    );
  }
}
