import $ from 'jquery';
import React, { Component } from 'react';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

// stateful component
export class AppHeader extends Component {
  // class field [new syntax]
  // 컴포넌트 상태 설정
  state = {
    learnLink: {
      className: 'App-link',
      href: 'https://reactjs.org',
      text: 'Learn React',
      isExternal: true,
    },
  };

  getDescription() {
    return [
      'Edit',
      ' ',
      <code key="appEntryFile">src/App.js</code>,
      ' ',
      'and save to reload.',
    ];
  }

  static getDerivedStateFromProps(props, state) {
    // 이 안에서 this 인스턴스에 접근할 수 있을까?
    // 반환하는 것은 컴포넌트의 상태에 합성할 파생 상태(객체)
    return {
      count: props.count ?? 100,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 조건 확인 (비교)
    // props, state(with derivedState)
    // console.log('현재 props 또는 state', this.props, this.state);
    // console.log('다음 props 또는 state', nextProps, nextState);

    // 부모로부터 전달 받은 props의 brand.label 값이 바뀌면
    // 컴포넌트 렌더링을 하지 않는다.
    if (nextProps.brand.label !== this.props.brand.label) {
      // render() 미실행
      console.log('부모 컴포넌트의 리 렌더링 요청을 묵살한다.');
      // return false;
    }

    // 상황 1.
    // 이전 props와 다음 props의 차이가 없다.
    // 굳이 재조정 알고리즘에 의해 다시 렌더링 될 필요가 없다.

    // render() 실행
    return true;

  }

  render() {
    const { learnLink } = this.state;
    const {
      brand: { label, className },
    } = this.props;

    return (
      <header className="App-header">
        <ReactLogo title={label} className={className} />
        <p>{this.getDescription()}</p>
        <p>브랜드 레이블: {label}</p>
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

  componentDidMount() {
    // DOM 노드에 접근 가능 여부
    // console.log('componentDidMount', document.querySelector('.App-header'))

    // 컴포넌트의 상태 업데이트 (시간의 흐름에 따라 제어)
    setTimeout(() => {
      // React 컴포넌트 상태 업데이트 (React 컨트롤)
      this.setState({
        learnLink: {
          ...this.state.learnLink,
          text: '리엑트 함께 배워요!! 😃',
        },
      });
    }, 3000);

    // 명령형 프로그래밍을 사용해 유지/보수 하거나,
    // 또는 접근성을 준수해야 할 때 사용되는 라이프 사이클 메서드
    // componentDidMount와 componentDidUpdate 이다.

    // jQuery를 사용해 명령형 프로그래밍
    $('.App-header svg').animate(
      {
        opacity: 0.1,
      },
      10000
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM 노드에 접근 후, 정보 값을 읽기
    // 읽은 정보 값을 스냅샷 반환
    return {
      name: 'this is snapshot',
      version: '0.1.2'
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      console.log({snapshot});
    }
    // console.log('컴포넌트가 업데이트 되었습니다!');
    // console.log('이전 props 또는 state', { prevProps, prevState });
    // console.log('현재 props 또는 state', {
    //   props: this.props,
    //   state: this.state,
    // });
  }

  componentWillUnmount() {
    // console.log('컴포넌트가 곧 소멸(언마운트)됩니다.');
  }
}
