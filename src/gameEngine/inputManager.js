export default class InputManager {
  constructor() {
    this.keypress = {};
    this.events = [];
  }

  isKeyDown(key) {
    const keyCode = key.toLowerCase();
    return this.keypress[keyCode];
  }

  addEventListener(eventName, cb) {
    window.addEventListener(eventName, cb);
    this.events.push([eventName, cb]);
  }

  init() {
    this.addEventListener("keydown", (e) => {
      this.handleKeyEvent(e.key, true);
    });

    this.addEventListener("keyup", (e) => {
      this.handleKeyEvent(e.key, false);
    });
  }

  remove() {
    this.events.forEach((event) => {
      window.removeEventListener(event[0], event[1]);
    });

    this.events = [];
  }

  handleKeyEvent(key, state) {
    const keyCode = key.toLowerCase();
    this.keypress[keyCode] = state;
  }
}