import './styles/main.css';
import React from 'react';
import { render as domRender } from 'react-dom';
import { RandomCountUpClass } from '../components';
import { settings, getRandomMinMax } from '../utils';

let count = 0;
const MIN = 30;
const MAX = 76;
const TARGET = getRandomMinMax(MIN, MAX);
const rootNode = document.getElementById('root');

settings.setDocumentTitle(`(${TARGET}) 랜덤 카운트 업 앱! (with React ⚛)`);
settings.clickDocumentReloadBrowser();

let bgmNode = null;
// let bgmNodeID = 'bgsound';
settings.autoPlaySound({
  src: '/assets/bgm-count.mp3' /* required */,
  resolve: (audioNode) => {
    bgmNode = audioNode;
    bgmNode.loop = true;
  },
});

function render(count, isComplete) {
  domRender(
    <RandomCountUpClass count={count} isComplete={isComplete} />,
    rootNode
  );
}

function animate() {
  count += 1;
  let isComplete = count >= TARGET;
  render(count, isComplete);
  if (!isComplete) {
    if (bgmNode && !bgmNode.playing) {
      bgmNode.play();
    }
    window.requestAnimationFrame(animate);
  } else {
    bgmNode.pause();
  }
}

animate();
