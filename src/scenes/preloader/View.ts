import { Events } from 'phaser';
import ScreenUtility from '@/modules/utility/Screen';
import { Image } from '@/modules/gameobject/Image';
import { Rectangle } from '@/modules/gameobject/Rectangle';

export class PreloaderView {
  _bar: Rectangle;

  event: Phaser.Events.EventEmitter;
  screenUtil = ScreenUtility.getInstance();

  constructor(private _scene: Phaser.Scene) {
    this.event = new Events.EventEmitter();
  }

  render() {
    const { centerX, centerY, width, height } = this.screenUtil;
    const bg = new Image(this._scene, centerX, centerY, 'background');
    bg.transform.setCoverMinPreferredDisplaySize(width, height);

    //  A simple progress bar. This is the outline of the bar.
    const progressFrame = new Rectangle(this._scene, centerX, centerY, 468, 18);
    progressFrame.gameObject.setStrokeStyle(1, 0xffffff);

    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    this._bar = new Rectangle(
      this._scene,
      centerX - 230,
      progressFrame.gameObject.y,
      4,
      14,
      0xffffff
    );
  }

  updateProgressText(value: number) {
    this._bar.gameObject.width = 4 + 460 * value;
  }
}
