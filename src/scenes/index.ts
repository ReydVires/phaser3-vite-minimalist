import { BootSceneController } from './boot/Controller';
import { GameSceneController } from './game/Controller';
import { MenuSceneController } from './menu/Controller';
import { PreloaderSceneController } from './preloader/Controller';

export const SceneInfo = {
  BootSceneController: {
    key: 'BootScene',
    scene: BootSceneController,
  },
  PreloaderSceneController: {
    key: 'PreloaderScene',
    scene: PreloaderSceneController,
  },
  MenuSceneController: {
    key: 'MenuScene',
    scene: MenuSceneController,
  },
  GameSceneController: {
    key: 'GameScene',
    scene: GameSceneController,
  },
} as const;

const SceneList = () => Object.values(SceneInfo).map((info) => info.scene);

export default SceneList;
