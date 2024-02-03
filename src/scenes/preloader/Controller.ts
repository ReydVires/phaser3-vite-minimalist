import { Scene } from 'phaser';
import { SceneInfo } from '@/scenes';
import { PreloaderView } from './View';

export class PreloaderSceneController extends Scene {
  view: PreloaderView;

  constructor() {
    super(SceneInfo.PreloaderSceneController.key);

    this.onCompleteLoadBoot = this.onCompleteLoadBoot.bind(this);
    this.onCompleteLoad = this.onCompleteLoad.bind(this);
  }

  init() {
    this.view = new PreloaderView(this);
  }

  preload() {
    this.load.once('complete', this.onCompleteLoadBoot);

    this.loadBootResources();
    this.load.start(); // Execute: onCompleteLoadBoot
  }

  private loadBootResources() {
    // LOAD PRELOADER FILE HERE!
    this.load.image('background', 'assets/image/bg.png');
  }

  private loadGameResources() {
    //  Load the assets for the game - Replace with your own assets
    this.load.setPath('assets');

    // LOAD ALL GAME FILE HERE!
    this.load.image('logo', 'image/logo.png');
  }

  onCompleteLoadBoot() {
    this.view.render();
    this.load.on('progress', (value: number) =>
      this.view.updateProgressText(value)
    );

    this.load.once('complete', this.onCompleteLoad);

    this.loadGameResources();
    this.load.start(); // Execute: onCompleteLoad
  }

  onCompleteLoad() {
    this.load.removeAllListeners();
    this.scene.start(SceneInfo.MenuSceneController.key);
  }
}
