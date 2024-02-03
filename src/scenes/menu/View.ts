import { Events } from 'phaser';
import { EventName } from './Events';
import AudioUtility from '@/modules/utility/Audio';
import ScreenUtility from '@/modules/utility/Screen';
import { Image } from '@/modules/gameobject/Image';

export class MenuView {
  event: Phaser.Events.EventEmitter;
  screenUtil = ScreenUtility.getInstance();
  audioUtil = AudioUtility.getInstance();

  constructor(private _scene: Phaser.Scene) {
    this.event = new Events.EventEmitter();
  }

  render() {
    const { centerX, centerY } = this.screenUtil;

    const logo = new Image(this._scene, centerX, centerY * 0.2, 'logo');
    logo.gameObject.setOrigin(0.5, 0);

    this._scene.add
      .text(centerX, centerY, 'Menu Here', {
        fontFamily: 'Arial Black',
        fontSize: 64,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 12,
        align: 'center',
      })
      .setOrigin(0.5);

    this._scene.input.on('pointerdown', (e: Phaser.Input.Pointer) => {
      if (e.button !== 0) return; // Left click only
      this.event.emit(EventName.onClickScreen);
    });

    this.event.emit(EventName.onRenderFinish);
  }
}
