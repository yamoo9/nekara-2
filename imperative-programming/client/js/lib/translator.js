function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { textFormatting, throwError } from '../utils/index.js';

var Translator = function () {
  function Translator(state, initialLanguageMode) {
    if (initialLanguageMode === void 0) {
      initialLanguageMode = 'en';
    }

    this.version = '0.0.1';
    this._state = state;
    this._languageMode = initialLanguageMode;
  }

  var _proto = Translator.prototype;

  _proto.isKorean = function isKorean() {
    return this.currentMode === 'ko';
  };

  _proto.isEnglish = function isEnglish() {
    return this.currentMode === 'en';
  };

  _proto.toggleLanguageMode = function toggleLanguageMode() {
    this._languageMode = this.isKorean() ? 'en' : 'ko';
    return this;
  };

  _proto.getContents = function getContents(item) {
    var contents = this._state[this.currentMode];
    var contentItem = contents[item];
    return !item ? contents : contentItem ? contentItem : throwError(item + "\uC740 translator \uCF58\uD150\uCE20 \uC544\uC774\uD15C\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
  };

  _proto.getLabel = function getLabel() {
    return (this.isKorean() ? '한 → 영' : '영 → 한') + " \uBC88\uC5ED";
  };

  _createClass(Translator, [{
    key: "currentMode",
    get: function get() {
      return this._languageMode;
    }
  }]);

  return Translator;
}();

var languageState = {
  en: {
    headline: 'Imperative Programming',
    description: textFormatting("\n      In computer science, imperative programming is a programming paradigm \n      that uses statements that change a program's state.\n    ")
  },
  ko: {
    headline: '명령형 프로그래밍',
    description: textFormatting("\n      \uCEF4\uD4E8\uD130 \uACFC\uD559\uC5D0\uC11C \uBA85\uB839\uD615 \uD504\uB85C\uADF8\uB798\uBC0D(\u547D\u4EE4\u578B \uD504\uB85C\uADF8\uB798\uBC0D, \uC601\uC5B4: imperative programming)\uC740 \n      \uC120\uC5B8\uD615 \uD504\uB85C\uADF8\uB798\uBC0D\uACFC \uBC18\uB300\uB418\uB294 \uAC1C\uB150\uC73C\uB85C, \uD504\uB85C\uADF8\uB798\uBC0D\uC758 \uC0C1\uD0DC\uC640 \uC0C1\uD0DC\uB97C \uBCC0\uACBD\uC2DC\uD0A4\uB294 \uAD6C\uBB38\uC758 \uAD00\uC810\uC5D0\uC11C \n      \uC5F0\uC0B0\uC744 \uC124\uBA85\uD558\uB294 \uD504\uB85C\uADF8\uB798\uBC0D \uD328\uB7EC\uB2E4\uC784\uC758 \uC77C\uC885\uC774\uB2E4.\n    ")
  }
};
export default new Translator(languageState);