import { Events } from 'phaser';
import { EventName } from './Events';
import AudioUtility from '@/modules/utility/Audio';
import ScreenUtility from '@/modules/utility/Screen';

export class MenuView {
  event: Phaser.Events.EventEmitter;
  screenUtil = ScreenUtility.getInstance();
  audioUtil = AudioUtility.getInstance();

  constructor(private _scene: Phaser.Scene) {
    this.event = new Events.EventEmitter();
  }

  private render() {
    const { centerX, centerY } = this.screenUtil;

    this._scene.add
      .text(centerX, centerY, 'Click to Play!', {
        fontFamily: 'Arial',
        fontSize: 48,
        color: '#ffffff',
        align: 'center',
      })
      .setOrigin(0.5);

    this._scene.input.on('pointerdown', (e: Phaser.Input.Pointer) => {
      if (e.button !== 0) return; // Left click only
      this.event.emit(EventName.onClickScreen);
    });
  }

  create() {
    this.render();
    this.event.emit(EventName.onRenderFinish);
  }
}
