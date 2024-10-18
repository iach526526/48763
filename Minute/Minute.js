/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Minute extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "ca3374461ab44d9671aaded94f4db913",
        "./Minute/costumes/ca3374461ab44d9671aaded94f4db913.svg",
        { x: 0.20707186035863856, y: 123.15005840762218 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    while (true) {
      this.direction =
        new Date().getMinutes() * 6 + new Date().getSeconds() * 0.1;
      yield;
    }
  }
}
