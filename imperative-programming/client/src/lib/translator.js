import { textFormatting, throwError  } from '../utils/index.js';

// class 작성
class Translator {
  // 생성자
  constructor(state, initialLanguageMode = 'en') {
    // 인스턴스 멤버 구성
    this._state = state;
    this._languageMode = initialLanguageMode;
  }

  // 스태틱 멤버
  // 클래스 필드 구문 활용
  version = '0.0.1';

  // 인스턴스 멤버
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

  getContents(item) {
    const contents = this._state[this.currentMode];
    const contentItem = contents[item];
    return !item
      ? contents
      : contentItem
      ? contentItem
      : throwError(`${item}은 translator 콘텐츠 아이템이 아닙니다.`);
  }

  getLabel() {
    return `${this.isKorean() ? '한 → 영' : '영 → 한'} 번역`;
  }

}

// 인스턴스 생성 시 전달할 데이터(상태, state)
const languageState = {
  en: {
    headline: 'Imperative Programming',
    description: textFormatting(`
      In computer science, imperative programming is a programming paradigm 
      that uses statements that change a program's state.
    `),
  },
  ko: {
    headline: '명령형 프로그래밍',
    description: textFormatting(`
      컴퓨터 과학에서 명령형 프로그래밍(命令型 프로그래밍, 영어: imperative programming)은 
      선언형 프로그래밍과 반대되는 개념으로, 프로그래밍의 상태와 상태를 변경시키는 구문의 관점에서 
      연산을 설명하는 프로그래밍 패러다임의 일종이다.
    `),
  },
};

// class의 인스턴스를 생성해서 내보내기
export default new Translator(languageState);