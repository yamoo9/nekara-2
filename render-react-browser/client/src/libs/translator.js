class Translator {
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

/* -------------------------------------------------------------------------- */

const initialState = {
  en: {
    headline: 'Declarative programming',
    description: Translator.textFormatting(`
      In computer science, declarative programming is a programming paradigm—a style of 
      building the structure and elements of computer programs—that expresses the logic of 
      a computation without describing its control flow. Many languages that apply this style 
      attempt to minimize or eliminate side effects by describing what the program must accomplish 
      in terms of the problem domain, rather than describe how to accomplish it as a sequence of 
      the programming language primitives (the how being left up to the language's implementation). 
      This is in contrast with imperative programming, which implements algorithms in explicit steps.
    `),
  },
  ko: {
    headline: '선언형 프로그래밍',
    description: Translator.textFormatting(`
      선언형 프로그래밍(宣言型 프로그래밍, 영어: declarative programming)은 두 가지 뜻으로 통용되고 있다. 
      한 정의에 따르면, 프로그램이 어떤 방법으로 해야 하는지를 나타내기보다 무엇과 같은지를 설명하는 경우에 "선언형"이라고 한다. 
      예를 들어, 웹 페이지는 선언형인데 웹페이지는 제목, 글꼴, 본문, 그림과 같이 "무엇"이 나타나야하는지를 묘사하는 것이지 
      "어떤 방법으로" 컴퓨터 화면에 페이지를 나타내야 하는지를 묘사하는 것이 아니기 때문이다.
    `),
  },
};

/* -------------------------------------------------------------------------- */

export const translator = new Translator(initialState, 'en');
