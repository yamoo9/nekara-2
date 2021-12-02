import { AppHeadline } from './Headline.js';
import { AppDescription } from './Description.js';

const { React } = window;

export function AppContents(props) {
  return (
    <div className="contents" lang={props.lang}>
      <AppHeadline />
      <AppDescription />
    </div>
  );
}
