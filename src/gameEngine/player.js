const g = 1960;

export default class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.dy = 0;
    this.dx = 500;
    this.onGround = false;
  }

  update(dt, up, right, left) {
    if(!this.onGround) {
      this.#applyGravity(dt);

      if (this.y >= 500) {
        this.dy = 0;
        this.y = 500;
        this.onGround = true;
      }
    }
    if (up && this.onGround) {
      this.onGround = false;
      this.dy = -1000;
    }
    if (right) {
      this.x += this.dx * dt;
    } else if (left) {
      this.x -= this.dx * dt;
    }
  }

  #applyGravity(dt) {
    this.dy = this.dy + g * dt;
    this.y += this.dy * dt;
  }
}