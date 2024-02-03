import { Scene } from 'phaser';
import { SceneInfo } from '@/scenes';
import ScreenUtility from '@/modules/utility/Screen';
import AudioUtility from '@/modules/utility/Audio';

export class BootSceneController extends Scene {
  constructor() {
    super(SceneInfo.BootSceneController.key);
  }

  init() {
    AudioUtility.getInstance().init(this);
    ScreenUtility.getInstance().init(this.scale);
  }

  create() {
    this.scene.launch(SceneInfo.PreloaderSceneController.key);
  }
}
