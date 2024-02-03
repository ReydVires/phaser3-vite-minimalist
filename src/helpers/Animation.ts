type BaseAssetInfoType = {
  key: string;
  type: string;
};

type AnimationInfoType = BaseAssetInfoType & {
  spritesheetRef: string;
  start: number;
  end: number;
  frameSpeed: number;
  loop?: true;
};

interface AnimationAsset {
  [key: string]: AnimationInfoType;
}

export function AddAnimation(
  scene: Phaser.Scene,
  animationObject: AnimationInfoType
) {
  const frames = scene.anims.generateFrameNumbers(
    animationObject.spritesheetRef,
    {
      start: animationObject.start,
      end: animationObject.end,
    }
  );
  return scene.anims.create({
    key: animationObject.key,
    frames: frames,
    frameRate: animationObject.frameSpeed,
    repeat: animationObject.loop ? -1 : 0,
  });
}

export function AddAnimationList(
  scene: Phaser.Scene,
  animationObjects: AnimationAsset
) {
  for (const animKey in animationObjects) {
    const animationObject = animationObjects[animKey];
    AddAnimation(scene, animationObject);
  }
}
