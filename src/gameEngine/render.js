export default class Render {
  constructor(game) {
    this.game = game;

    this.imagePlatform = new Image();
    this.imageLava = new Image();
    this.imagePlatform.src = '/mapBlocks/platform.png';
    this.imageLava.src = '/mapBlocks/lava.png';
  }

  drawPlayer(player) {
    this.game.ctx.drawImage(player.image, player.x, player.y, player.width, player.height);
  }

  drawMap(map) {
    map.forEach((row, j) => {
      row.forEach((el, i) => {
        switch(el) {
          case 0:
            return;
          case 1:
            this.game.ctx.drawImage(this.imagePlatform, i * 32, j * 32, 32, 32);
            break;
          case 2:
            this.game.ctx.drawImage(this.imageLava, i * 32, j * 32, 32, 32);
            break;
          default:
            return;
        }
      })
    });
  }
}