/* 컴포넌트 템플릿 로드(비동기) --------------------------------------------------------- */

fetch('/components/EuidCounter/template.html')
  .then((response) => response.text())
  .then((template) => define('euid-counter', template));

/* 로드 후, 컴포넌트 정의 ------------------------------------------------------------ */

function define(componentName, template) {
  class EuidCounter extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.rendered = false;
      this.props = {};
      this.state = {};
      this.setProps();
      this.setState({ count: this.props.count });
    }

    connectedCallback() {
      if (!this.rendered) {
        this.render();
        this.rendered = true;
      }
    }

    // [미션]
    // 프로그래밍 방식으로 업데이트 된 속성을 감지하여
    // 각 속성 값을 컴포넌트의 props에 업데이트 합니다.
    static get observedAttributes() {
      return ['min', 'max', 'step', 'count'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.props[name] = Number(newValue);
      name === 'count' && (this.state.count = this.props.count);
    }

    disconnectedCallback() {
      console.log('커스텀 요소가 문서에서 제거되었습니다.');
    }

    setProps() {
      let count = Number(this.getAttribute('count') ?? 0);
      let step = Number(this.getAttribute('step') ?? 1);
      let min = Number(this.getAttribute('min') ?? 0);
      let max = Number(this.getAttribute('max') ?? 10000);

      if (count < min) {
        count = min;
      }
      if (count > max) {
        count = max;
      }

      this.props = { count, step, min, max };
    }

    setState(newState) {
      this.state = {
        ...this.state,
        ...newState,
      };
      this.update();
    }

    render() {
      this.shadowRoot.innerHTML = template;
      this.outputNode = this.shadowRoot.querySelector('output');
      this.outputNode.textContent = this.props.count;
      this.bindEvent();
    }

    update() {
      const { min, max } = this.props;
      const { count } = this.state;

      if (this.outputNode) {
        if (count < min) {
          this.setState({ count: min });
          this.shake();
          return;
        }
        if (count > max) {
          this.setState({ count: max });
          this.shake();
          return;
        }
        this.outputNode.textContent = count;
      }
    }

    bindEvent() {
      this.containerNode = this.shadowRoot.querySelector('.EuidCounter');
      this.containerNode.addEventListener('click', ({ target }) => {
        if (target.nodeName.match(/button/i)) {
          target.classList.contains('decrement')
            ? this.decrement()
            : this.increment();
        }
      });
    }

    decrement() {
      this.setState({
        count: this.state.count - this.props.step,
      });
    }

    increment() {
      this.setState({
        count: this.state.count + this.props.step,
      });
    }

    shake() {
      this.containerNode.classList.add('shake');
      setTimeout(() => this.containerNode.classList.remove('shake'), 200);
    }
  }

  customElements.define(componentName, EuidCounter);
}
