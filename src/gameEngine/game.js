import Camera from "./camera";
import MapManager from "./mapManager";
import Player from "./player";

export default class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.camera = new Camera(this);
    this.mapManager = new MapManager();
    this.player1 = new Player(50, 100);
    this.player2 = new Player(600, 30);

    this.up = false;
    this.right = false;
    this.left = false;

    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'w':
          this.up = true;
          break;
        case 'd':
          this.right = true;
          break;
        case 'a':
          this.left = true;
          break;
      }
    })

    window.addEventListener('keyup', e => {
      switch (e.key) {
        case 'w':
          this.up = false;
          break;
        case 'd':
          this.right = false;
          break;
        case 'a':
          this.left = false;
          break;
      }
    })
  }

  render() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.player1.x, this.player1.y, this.player1.width, this.player1.height);

    this.ctx.fillRect(this.player2.x, this.player2.y, this.player2.width, this.player2.height);
  }

  update(dt) {
    this.player1.update(dt, this.up, this.right, this.left);
    this.player2.update(dt);
    this.camera.update(dt);

    this.render();
  }
}
