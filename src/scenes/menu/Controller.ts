import { Scene } from 'phaser';
import { SceneInfo } from '@/scenes';
import { MenuView } from './View';
import { EventName } from './Events';

type OnClickScreen = () => void;
type OnRenderFinish = () => void;

export class MenuSceneController extends Scene {
  view: MenuView;

  constructor() {
    super(SceneInfo.MenuSceneController.key);
  }

  init() {
    this.view = new MenuView(this);

    this.onClickScreen(() => {
      this.scene.start(SceneInfo.GameSceneController.key);
    });

    this.onRenderFinish(() => {
      // pass
    });
  }

  create() {
    this.view.render();
  }

  onRenderFinish(event: OnRenderFinish) {
    this.view.event.once(EventName.onRenderFinish, event);
  }

  onClickScreen(event: OnClickScreen) {
    this.view.event.on(EventName.onClickScreen, event);
  }
}
