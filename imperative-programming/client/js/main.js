"use strict";

var textFormatting = function textFormatting(text) {
  return text.toString().replace(/\n\s+/g, '').trim();
};

var throwError = function throwError(errorMessage) {
  throw new Error(errorMessage);
};

var translator = {
  en: {
    headline: 'Imperative Programming',
    description: textFormatting("\n      In computer science, imperative programming is a programming paradigm \n      that uses statements that change a program's state.\n    ")
  },
  ko: {
    headline: '명령형 프로그래밍',
    description: textFormatting("\n      \uCEF4\uD4E8\uD130 \uACFC\uD559\uC5D0\uC11C \uBA85\uB839\uD615 \uD504\uB85C\uADF8\uB798\uBC0D(\u547D\u4EE4\u578B \uD504\uB85C\uADF8\uB798\uBC0D, \uC601\uC5B4: imperative programming)\uC740 \n      \uC120\uC5B8\uD615 \uD504\uB85C\uADF8\uB798\uBC0D\uACFC \uBC18\uB300\uB418\uB294 \uAC1C\uB150\uC73C\uB85C, \uD504\uB85C\uADF8\uB798\uBC0D\uC758 \uC0C1\uD0DC\uC640 \uC0C1\uD0DC\uB97C \uBCC0\uACBD\uC2DC\uD0A4\uB294 \uAD6C\uBB38\uC758 \uAD00\uC810\uC5D0\uC11C \n      \uC5F0\uC0B0\uC744 \uC124\uBA85\uD558\uB294 \uD504\uB85C\uADF8\uB798\uBC0D \uD328\uB7EC\uB2E4\uC784\uC758 \uC77C\uC885\uC774\uB2E4.\n    ")
  },
  _languageMode: 'en',

  get currentMode() {
    return this._languageMode;
  },

  isKorean: function isKorean() {
    return this.currentMode === 'ko';
  },
  isEnglish: function isEnglish() {
    return this.currentMode === 'en';
  },
  toggleLanguageMode: function toggleLanguageMode() {
    this._languageMode = this.isKorean() ? 'en' : 'ko';
    return this;
  },
  getContents: function getContents(item) {
    var contents = this[this.currentMode];
    var contentItem = contents[item];
    return !item ? contents : contentItem ? contentItem : throwError(item + "\uC740 translator \uCF58\uD150\uCE20 \uC544\uC774\uD15C\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
  },
  getLabel: function getLabel() {
    return (this.isKorean() ? '한 → 영' : '영 → 한') + " \uBC88\uC5ED";
  }
};

if ('jQuery' in window) {
  var _window = window,
      jQuery = _window.jQuery;

  var translatorApp = function translatorApp($) {
    var $translateButton = $('.button__translation');

    var handleTranslation = function handleTranslation() {
      translator.toggleLanguageMode();
      updateRenderUI();
    };

    var updateRenderUI = function updateRenderUI() {
      var _translator$getConten = translator.getContents(),
          headline = _translator$getConten.headline,
          description = _translator$getConten.description;

      var $contents = $('.contents');
      var $headline = $contents.find(':header');
      var $description = $contents.find('p');
      $headline.text(headline);
      $description.text(description);
      var label = translator.getLabel();
      $translateButton.attr({
        title: label,
        'aria-label': label
      });
    };

    $translateButton.on('click', handleTranslation);
  };

  jQuery(document).ready(translatorApp);
}
