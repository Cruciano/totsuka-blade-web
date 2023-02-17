import Camera from "./camera";
import MapManager from "./mapManager";
import Player from "./player";
import InputManager from "./inputManager";
import Controller from "./controller";
import Render from "./render";

export default class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.render = new Render(this);
    this.camera = new Camera(this);
    this.mapManager = new MapManager();

    this.player1 = new Player(50, 100);
    this.player2 = new Player(600, 30);
    this.currentMap = this.mapManager.getMap(0);

    this.inputManager = new InputManager();
    this.controller = new Controller(this);
  }

  start() {
    this.inputManager.init();
  }

  end() {
    this.inputManager.remove();
  }

  renderGame() {
    this.render.drawMap(this.currentMap);
    this.render.drawPlayer(this.player1);
    this.render.drawPlayer(this.player2);
  }

  update(dt) {
    this.controller.update();

    this.player1.update(dt);
    this.player2.update(dt);
    this.camera.update(dt);

    this.renderGame();
  }
}
