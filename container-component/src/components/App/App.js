import './App.css';
import { Component } from 'react';
import { AppHeader } from 'components';
import { queryNpmRegistry } from 'utils';

export default class App extends Component {
  state = {
    isShowHeader: true,
    brand: {
      label: 'React',
      className: 'App-logo',
    },
    packageInfo: [],
  };

  render() {
    const { brand, isShowHeader, packageInfo } = this.state;

    return (
      <div className="App">
        {isShowHeader ? (
          <>
            <AppHeader brand={brand} />
            {packageInfo.length > 0
              ? packageInfo.map(({ package: { name, description } }) => {
                  return (
                    <div key={name}>
                      <div>name: {name}</div>
                      <div>description: {description}</div>
                    </div>
                  );
                })
              : null}
          </>
        ) : (
          '이런... 자식 노드가 없습니다.'
        )}
      </div>
    );
  }

  componentDidMount() {
    // 네트워크 (비동기) 통신 요청
    // 마운트 이후 시점에 호출
    queryNpmRegistry({ query: 'react', size: 2 })
      .then((response) => response.json())
      .then(({ objects }) => {
        // 컴포넌트의 상태 업데이트
        this.setState({
          packageInfo: objects,
        });
      })
      .catch(({ message }) => console.error(message));
  }
}
