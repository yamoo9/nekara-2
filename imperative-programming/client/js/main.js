import { translator } from './lib/index.js';

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
