export default class Controller {
  constructor(game) {
    this.game = game;

    this.player1 = this.game.player1;
    this.player2 = this.game.player2;
  }

  update() {
    this.player1.movement.up = this.game.inputManager.isKeyDown("w");
    this.player1.movement.left= this.game.inputManager.isKeyDown("a");
    this.player1.movement.right = this.game.inputManager.isKeyDown("d");

    this.player2.movement.up = this.game.inputManager.isKeyDown("ArrowUp");
    this.player2.movement.left= this.game.inputManager.isKeyDown("ArrowLeft");
    this.player2.movement.right = this.game.inputManager.isKeyDown("ArrowRight");
  }
}