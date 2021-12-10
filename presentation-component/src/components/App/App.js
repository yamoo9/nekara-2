import React from 'react';
import { Emoji } from '../../components';

export default function App({ greetingMessage }) {
  return (
    <div className="app">
      <h1>{greetingMessage}</h1>
      <Emoji
        id="emoji-id"
        aria-label="emoji-label"
        source="/assets/emoji/oops.png"
        label="웁스!!"
      />
    </div>
  );
}
