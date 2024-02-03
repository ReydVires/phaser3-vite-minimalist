import { Events } from 'phaser';
import ScreenUtility from '@/modules/utility/Screen';
import { Image } from '@/modules/gameobject/Image';
import { EventName } from './Events';

export class GameView {
  event: Phaser.Events.EventEmitter;
  screenUtil = ScreenUtility.getInstance();

  constructor(private _scene: Phaser.Scene) {
    this.event = new Events.EventEmitter();
  }

  render() {
    const { centerX, centerY, width, height } = this.screenUtil;

    const bg = new Image(this._scene, centerX, centerY, 'background');
    bg.gameObject.setAlpha(0.5);
    bg.transform.setCoverMinPreferredDisplaySize(width, height);
    const bgRatio = bg.transform.ratio;

    this._scene.add
      .text(
        centerX,
        centerY,
        'Make something fun!\nand share it with us:\nsupport@phaser.io',
        {
          fontFamily: 'Arial Black',
          fontSize: 64 * bgRatio,
          color: '#ffffff',
          stroke: '#000000',
          strokeThickness: 12 * bgRatio,
          align: 'center',
        }
      )
      .setOrigin(0.5);

    this._scene.input.on('pointerdown', (e: Phaser.Input.Pointer) => {
      if (e.button !== 0) return; // Left click only
      this.event.emit(EventName.onClickScreen);
    });

    this.event.emit(EventName.onRenderFinish);
  }
}
