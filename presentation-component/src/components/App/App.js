import React from 'react';
import { Emoji } from '../../components';
import oops from '../../assets/emoji/oops.png';

export default function App({ greetingMessage, children }) {
  return (
    <div className="app">
      <h1>{greetingMessage}</h1>
      <Emoji
        id="emoji-id"
        aria-label="emoji-label"
        source={oops}
        label="웁스!!"
      />
      {children}
    </div>
  );
}
