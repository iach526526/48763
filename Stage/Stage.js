/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("southeast", "./Stage/costumes/southeast.svg", {
        x: 168.38640132670002,
        y: 166.30222760073514,
      }),
      new Costume("2Braun BC17", "./Stage/costumes/2Braun BC17.png", {
        x: 360,
        y: 360,
      }),
    ];

    this.sounds = [
      new Sound(
        "sword-art-online-alicization-find-your-sword-in-this-land-ost",
        "./Stage/sounds/sword-art-online-alicization-find-your-sword-in-this-land-ost.wav"
      ),
      new Sound("starburst-stream", "./Stage/sounds/starburst-stream.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.BROADCAST, { name: "break" }, this.whenIReceiveBreak),
    ];

    this.vars.s = 52;
    this.vars._ = 20;
    this.vars.temp = 110;
    this.vars.targetHh = 20;
    this.vars.targetMm = 41;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (
        this.compare(new Date().getHours(), this.vars.targetHh) === 0 &&
        this.compare(new Date().getMinutes(), this.vars.targetMm) === 0
      ) {
        this.stopAllSounds();
        this.broadcast("message1");
        yield* this.playSoundUntilDone("starburst-stream");
        yield* this.wait(8.11);
      } else {
        this.vars._ = 20;
      }
      yield;
    }
  }

  *whenIReceiveMessage1() {
    this.vars._ = 50;
    for (let i = 0; i < 20; i++) {
      this.vars._ = this.toNumber(this.vars._) + 3;
      yield* this.wait(1);
      yield;
    }
    this.vars.temp = this.vars._;
    this.vars._ = 50;
    yield* this.wait(3);
    this.vars._ = this.vars.temp;
    for (let i = 0; i < 37; i++) {
      this.vars._ = this.toNumber(this.vars._) + 2;
      yield* this.wait(1);
      yield;
    }
  }

  *whenIReceiveBreak() {
    this.vars._ = 20;
    this.stopAllSounds();
  }
}
