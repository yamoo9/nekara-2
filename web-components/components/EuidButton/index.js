class EuidButton extends HTMLElement {
  constructor() {
    super(); // this
    this.attachShadow({ mode: 'open' });
    this._rendered = false;
    this._attrs = {};
  }

  connectedCallback() {
    if (!this._rendered) {
      this._rendered = true;
      this._setAttrs();
      this.render();
    }
  }

  render() {
    const { type, class: className, style } = this._attrs;

    this.shadowRoot.innerHTML = /* html */ `
      <style>
        :host button {
          user-select: none;
          cursor: pointer;
          border-radius: 3px;
          border: 1px solid rgba(30 30 30 / 30%);
          padding: 0.46em 0.94em;
          font-size: 1rem;
          background: rgba(255 255 255 / 95%);
        }

        :host button:hover {
          border-color: rgb(34 130 188 / 50%);
        }
        
        :host button:focus {
          outline: 2px solid rgb(34 130 188 / 50%);
          border-color: rgb(34 130 188 / 50%);
        }
        
        :host button:focus:not(:focus-visible) {
          outline: none;
        }

        :host button:active {
          background: rgba(34 130 188 / 10%);
        }
      </style>

      <button 
        type="${type ?? 'button'}"
        class="${`EuidButton ${className ?? ''}`.trim()}"
      >
        <slot />
      </button>
    `;

    this._bindAttrs();
  }

  _setAttrs() {
    for (const { nodeName, nodeValue } of this.attributes) {
      this._attrs[nodeName] = nodeValue;
    }
  }

  _bindAttrs() {
    const buttonNode = this.shadowRoot.querySelector('button');
    for (const [key, value] of Object.entries(this._attrs)) {
      if (key === 'type' || key === 'class') {
        continue;
      }
      buttonNode.setAttribute(key, value);
    }
  }
}

customElements.define('euid-button', EuidButton);
