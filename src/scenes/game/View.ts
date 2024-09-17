import { Events } from 'phaser';
import ScreenUtility from '@/modules/utility/Screen';
import { EventName } from './Events';

export class GameView {
  event: Phaser.Events.EventEmitter;
  screenUtil = ScreenUtility.getInstance();

  constructor(private _scene: Phaser.Scene) {
    this.event = new Events.EventEmitter();
  }

  private render() {
    console.log('?>', this._scene);
  }

  create() {
    this.render();
    this.event.emit(EventName.onRenderFinish);
  }
}
