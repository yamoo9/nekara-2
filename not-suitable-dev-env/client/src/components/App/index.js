import { AppContents } from './Contents.js';
import { TranslationButton } from '../Button/TranslationButton.js';

const { React } = window;

export default function App() {
  return (
    <div className="app">
      <AppContents lang="en" />
      <TranslationButton size={24 * 1} label="영 → 한" />
    </div>
  );
}
