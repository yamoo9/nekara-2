import React, { Component } from 'react';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

// stateful component
export class AppHeader extends Component {
  // class field [new syntax]
  // 컴포넌트 상태 설정
  state = {
    brand: {
      label: 'React',
      className: 'App-logo',
    },
    learnLink: {
      className: 'App-link',
      href: 'https://reactjs.org',
      text: 'Learn React',
      isExternal: true,
    },
  };

  // 컴포넌트의 메서드 (사용자 정의)
  getDescription() {
    return [
      'Edit',
      ' ',
      <code key="appEntryFile">src/App.js</code>,
      ' ',
      'and save to reload.',
    ];
  }

  // 컴포넌트 메서드 (React 빌트인)
  // 선언형 프로그래밍
  render() {
    console.log('render', document.querySelector('.App-header'))

    const {
      brand: { label, className },
      learnLink,
    } = this.state;

    return (
      <header className="App-header">
        <ReactLogo title={label} className={className} />
        <p>{this.getDescription()}</p>
        <a
          className={learnLink.className}
          href={learnLink.href}
          target={learnLink.isExternal && '_blank'}
          rel={learnLink.isExternal && 'noopener noreferrer'}
        >
          {learnLink.text}
        </a>
      </header>
    );
  }

  // 라이프 사이클 메서드
  // 명령형 프로그래밍
  // 컴포넌트가 실제 DOM에 마운트 된 이후 실행
  componentDidMount() {
    console.log('컴포넌트가 실제 DOM에 마운트 된 이후 실행');
    // DOM 노드에 접근 가능 여부
    console.log('componentDidMount', document.querySelector('.App-header'))

    // 컴포넌트의 상태 업데이트 (시간의 흐름에 따라 제어)
    setTimeout(() => {
      this.setState({
        learnLink: {
          ...this.state.learnLink,
          text: '리엑트 함께 배워요!! 😃'
        }
      })
    }, 3000);
  }

  componentDidUpdate() {
    console.log('컴포넌트가 업데이트 되었습니다!');
  }
  
}
