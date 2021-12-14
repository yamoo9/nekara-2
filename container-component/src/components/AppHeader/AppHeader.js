import React from 'react';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

// stateful component
export class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    // 컴포넌트 상태 설정
    this.state = {
      brand: {
        label: 'React',
        className: 'App-logo',
      },
      descripition: '',
      learnLink: {
        className: 'App-link',
        href: 'https://reactjs.org',
        text: 'Learn React',
        isExternal: true
      }
    };
  }

  render() {
    const {
      brand: { label, className },
      learnLink
    } = this.state;

    return (
      <header className="App-header">
        <ReactLogo title={label} className={className} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={learnLink.className}
          href={learnLink.href}
          target={learnLink.isExternal && "_blank"}
          rel={learnLink.isExternal && "noopener noreferrer"}
        >
          {learnLink.text}
        </a>
      </header>
    );
  }
}
