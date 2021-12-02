import { AppHeadline } from './Headline.js';
import { AppDescription } from './Description.js';

const { React } = window;

export function AppContents() {
  return (
    <div className="contents" lang="en">
      <AppHeadline />
      <AppDescription />
    </div>
  );
}
