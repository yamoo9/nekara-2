export default class Translator {
  constructor(state, initalLanguageMode) {
    this._state = state;
    this._languageMode = initalLanguageMode;
  }

  static textFormatting = (text) =>
    text.toString().replace(/\n\s+/g, '').trim();

  get currentMode() {
    return this._languageMode;
  }

  isKorean() {
    return this.currentMode === 'ko';
  }

  isEnglish() {
    return this.currentMode === 'en';
  }

  toggleLanguageMode() {
    this._languageMode = this.isKorean() ? 'en' : 'ko';
    return this;
  }

  getLabel() {
    return `${this.isKorean() ? '한 → 영' : '영 → 한'} 번역`;
  }

  getContents(key) {
    const contents = this._state[this.currentMode];
    return key ? contents[key] : contents;
  }
}
