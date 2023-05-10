class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" });
  }
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }
  preload() {
    console.log("Splash Scene");
    this.load.image(
      "splashSceneBackground",
      "./Images/assets/splashSceneImage.png"
    );
  }
  create(data) {
    this.SplashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    );
    this.SplashSceneBackgroundImage.x = 1920 / 2;
    this.SplashSceneBackgroundImage.y = 1080 / 2;
  }
  update(time, date) {
    if (time > 3000) {
      this.scene.switch("titleScene");
    }
  }
}
export default SplashScene;
