const g = 1960;

export default class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.velocity = {
      dx: 500,
      dy: 0,
    }
    this.onGround = false;
    this.movement = {
      up: false,
      right: false,
      left: false,
    }
  }

  jump() {
    this.onGround = false;
    this.velocity.dy = -1000;
  }

  update(dt) {
    if(!this.onGround) {
      this.#applyGravity(dt);

      //ToDo: change when the collision logic would be implemented
      if (this.y >= 500) {
        this.velocity.dy = 0;
        this.y = 500;
        this.onGround = true;
      }
    } else if (this.movement.up) {
      this.jump();
    }

    if (this.movement.right) {
      this.x += this.velocity.dx * dt;
    } else if (this.movement.left) {
      this.x -= this.velocity.dx * dt;
    }
  }

  #applyGravity(dt) {
    this.velocity.dy = this.velocity.dy + g * dt;
    this.y += this.velocity.dy * dt;
  }
}