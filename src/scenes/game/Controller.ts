import { Scene } from 'phaser';
import { SceneInfo } from '@/scenes';
import { GameView } from './View';
import { EventName } from './Events';

type OnClickScreen = () => void;
type OnRenderFinish = () => void;

export class GameSceneController extends Scene {
  view: GameView;

  constructor() {
    super(SceneInfo.GameSceneController.key);
  }

  init() {
    this.view = new GameView(this);

    this.onClickScreen(() => {
      this.scene.start(SceneInfo.MenuSceneController.key);
    });

    this.onRenderFinish(() => {
      // pass
    });
  }

  create() {
    this.view.create();
  }

  onRenderFinish(event: OnRenderFinish) {
    this.view.event.once(EventName.onRenderFinish, event);
  }

  onClickScreen(event: OnClickScreen) {
    this.view.event.on(EventName.onClickScreen, event);
  }
}
