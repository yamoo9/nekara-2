import './TiltCard.css';
import React, { Component, createRef, forwardRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

/* -------------------------------------------------------------------------- */
// 참고
// Vanilla Tilt — https://www.npmjs.com/package/vanilla-tilt
// jQuery Tilt  — https://www.npmjs.com/package/tilt.js
// React Tilt   — https://www.npmjs.com/package/react-parallax-tilt
/* -------------------------------------------------------------------------- */

// Vanilla Tilt 옵션
// const tiltOptions = {
//   'max': 8,
//   'speed': 10,
//   'perspective': 400,
//   'scale': 1.01,
//   'glare': true,
//   'max-glare': 0.25,
// };

export default class TiltCard extends Component {
  static defaultOptions = {
    'max': 8,
    'speed': 10,
    'perspective': 1000,
    'scale': 1.01,
    'glare': true,
    'max-glare': 0.25,
  };

  tiltCardRef = createRef(null);

  // TiltCard 사용 시, 사용자 정의 옵션 설정
  options = {
    ...TiltCard.defaultOptions,
    ...this.props.options,
  };

  handleTiltChange = ({ detail }) => {
    // console.log(detail);
  };

  // [구독] 최초 마운트 시점 이후 처리할 로직을 작성합니다.
  componentDidMount() {
    const { current: tiltCardNode } = this.tiltCardRef;
    VanillaTilt.init(tiltCardNode, this.options);
    // TiltCard 플러그인이 연결된 DOM 노드에 설정된 커스텀 이벤트 감지
    tiltCardNode.addEventListener('tiltChange', this.handleTiltChange);
  }

  // [취소] 마운트 해제 직전에 처리할 로직을 작성합니다.
  componentWillUnmount() {
    const { current: tiltCardNode } = this.tiltCardRef;

    // 플러그인 인스턴스 파괴
    tiltCardNode.vanillaTilt.destroy();

    // 연결된 이벤트 해제(제거)
    tiltCardNode.removeEventListener('tiltChange', this.handleTiltChange);
  }

  render() {
    const { children } = this.props;

    return (
      <div ref={this.tiltCardRef} className="tiltCard">
        <div className="formControl">
          <label htmlFor="email">레이블</label>
          <input
            ref={this.props.forwardRef}
            id="email"
            type="email"
            placeholder="yamoo9@euid.dev"
          />
        </div>
        {children}
      </div>
    );
  }
}
