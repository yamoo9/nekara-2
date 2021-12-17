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
    error: null,
  };

  static getDerivedStateFromError(error) {
    // 오류를 감지하면 새로운 파생 상태를 반환
    return {
      error, // { message }
    };
  }

  render() {
    const { error, brand, isShowHeader } = this.state;

    // 조건부 렌더링
    // JSX 안이 아니기 때문에 문을 사용
    // App 컴포넌트가 포함하는 하위(자식 또는 자손) 컴포넌트에 오류가 발생하면
    // 오류를 감지해 alert role 요소를 화면에 출력한다.
    if (error) {
      return <div role="alert">{error.message}</div>;
    }

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

  // componentDidCatch(error, info) {
  //   console.log(error);
  //   console.log(info.componentStack);
  //   console.log(this);
  // }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        brand: {
          ...this.state.brand,
          label: '현 시점 Front-end 프레임워크 최강자! 리엑트',
        },
      });
    }, 4000);
  }
}
