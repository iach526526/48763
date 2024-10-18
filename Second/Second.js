/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Second extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "e6ec239ec59a75a5fd8a6132ba0af648",
        "./Second/costumes/e6ec239ec59a75a5fd8a6132ba0af648.svg",
        { x: 117.01975042458282, y: 112.04316924450175 }
      ),
      new Costume("costume1", "./Second/costumes/costume1.png", { x: 0, y: 0 }),
      new Costume(
        "cac87737bc98ff7854cbb752381cmzt5",
        "./Second/costumes/cac87737bc98ff7854cbb752381cmzt5.svg",
        { x: 6.676190519765498, y: 27.817569013889738 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    while (true) {
      this.direction = new Date().getSeconds() * 6;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.goto(0, 0);
    while (true) {
      this.direction = new Date().getSeconds() * 6;
      yield;
    }
  }
}
