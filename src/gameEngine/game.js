import Camera from "./camera";
import MapManager from "./mapManager";
import Player from "./player";
import InputManager from "./inputManager";
import Controller from "./controller";

export default class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.camera = new Camera(this);
    this.mapManager = new MapManager();

    this.player1 = new Player(50, 100);
    this.player2 = new Player(600, 30);

    this.inputManager = new InputManager();
    this.controller = new Controller(this);
  }

  start() {
    this.inputManager.init();
  }

  end() {
    this.inputManager.remove();
  }

  render() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.player1.x, this.player1.y, this.player1.width, this.player1.height);

    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.player2.x, this.player2.y, this.player2.width, this.player2.height);
  }

  update(dt) {
    this.controller.update();

    this.player1.update(dt);
    this.player2.update(dt);
    this.camera.update(dt);

    this.render();
  }
}
