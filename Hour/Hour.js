/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hour extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Hour/costumes/costume1.svg", { x: 0, y: 0 }),
      new Costume("costume2", "./Hour/costumes/costume2.svg", { x: 46, y: 53 }),
      new Costume(
        "ca3374461ab44d9671aaded94f4db913",
        "./Hour/costumes/ca3374461ab44d9671aaded94f4db913.svg",
        { x: -0.09075749999999516, y: 17.935562500000003 }
      ),
    ];

    this.sounds = [new Sound("Meow", "./Hour/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    while (true) {
      this.direction =
        new Date().getHours() * 30 + new Date().getMinutes() * 0.5;
      yield;
    }
  }
}
