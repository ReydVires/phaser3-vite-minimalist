import { CANVAS, Game, Scale, WEBGL } from 'phaser';
import ScreenProfile from '@/helpers/ScreenProfile';
import { sceneList } from '@/scenes';

import type { Types } from 'phaser';

const renderType = () => {
  const isFirefox = /Firefox/i.test(window.navigator.userAgent);
  // Set to WEBGL in Firefox, using Canvas in Firefox somehow create performance / lagging issues
  return isFirefox ? WEBGL : CANVAS;
};

const { width, height } = ScreenProfile('LANDSCAPE');

const config: Types.Core.GameConfig = {
  type: renderType(),
  parent: 'app',
  scale: {
    mode: Scale.FIT,
    width,
    height,
    autoCenter: Scale.CENTER_BOTH,
    autoRound: true,
  },
  backgroundColor: '#3498db', // '#1e1e1e'
  input: { activePointers: 2 },
  render: {
    antialias: true,
    pixelArt: false,
    roundPixels: false,
  },
  scene: sceneList(),
};

const game = new Game(config);

window.addEventListener('resize', () => {
  game.scale.updateBounds();
});
