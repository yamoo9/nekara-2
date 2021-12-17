import $ from 'jquery';
import { Component } from 'react';
import { ReactComponent as ReactLogo } from 'assets/logo.svg';

export class AppHeader extends Component {
  state = {
    learnLink: {
      className: 'App-link',
      href: 'https://reactjs.org',
      text: 'Learn React',
      isExternal: true,
    },
  };

  getDescription() {
    // React children []
    return [
      'Edit',
      ' ',
      <code key="appEntryFile">src/App.js</code>,
      ' ',
      'and save to reload.',
    ];
  }

  renderDescriptionHTML() {
    return {
      __html: 'Edit <code>src/App.js</code> and save to reload.',
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      count: props.count ?? 100,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
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
        {/* <p>{this.getDescription()}</p> */}
        <p dangerouslySetInnerHTML={this.renderDescriptionHTML()} />
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
    setTimeout(() => {
      this.setState({
        learnLink: {
          ...this.state.learnLink,
          text: '리엑트 함께 배워요!! 😃',
        },
      });
    }, 3000);

    this.props.active &&
      $('.App-header svg').animate(
        {
          opacity: 0.1,
        },
        10000
      );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      name: 'this is snapshot',
      version: '0.1.2',
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      console.log({ snapshot });
    }
  }

  componentWillUnmount() {
    // console.log('컴포넌트가 곧 소멸(언마운트)됩니다.');
  }
}
