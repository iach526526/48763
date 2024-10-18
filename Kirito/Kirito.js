/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kirito extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Kirito/costumes/costume1.svg", {
        x: 73.14551837144629,
        y: 76.40487829208743,
      }),
    ];

    this.sounds = [new Sound("A Bass", "./Kirito/sounds/A Bass.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
    this.moveAhead();
    this.goto(0, 0);
    while (true) {
      this.direction += this.toNumber(this.stage.vars._);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.s = new Date().getSeconds();
    while (true) {
      yield* this.wait(1);
      this.stage.vars.s++;
      if (this.toNumber(this.stage.vars.s) === 60) {
        this.stage.vars.s = 0;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stopAllSounds();
    this.broadcast("break");
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    yield* this.askAndWait(
      "Pomodoro Timer?(hour) PS.Enter 'no' to display the time without starting the timer."
    );
    if (!(this.answer === "no")) {
      this.stage.vars.targetHh =
        new Date().getHours() + this.toNumber(this.answer);
      yield* this.askAndWait("Pomodoro Timer?(minute)");
      this.stage.vars.targetMm =
        new Date().getMinutes() + this.toNumber(this.answer);
    }
    this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
  }
}
