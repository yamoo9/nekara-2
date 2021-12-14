import './App.css';
import { Component } from 'react';
import { AppHeader } from 'components';

// stateless component → stateful component
// functional → class
export default class App extends Component {
  state = {
    isShowHeader: true,
    brand: {
      label: 'React',
      className: 'App-logo',
    },
  };

  render() {
    return (
      <div className="App">
        {this.state.isShowHeader
          ? <AppHeader brand={this.state.brand} />
          : '이런... 자식 노드가 없습니다.'}
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        brand: {
          ...this.state.brand,
          label: '현 시점 Front-end 프레임워크 최강자! 리엑트'
        }
      })
    }, 4000);
  }
}
