import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Hour from "./Hour/Hour.js";
import Minute from "./Minute/Minute.js";
import Second from "./Second/Second.js";
import Kirito from "./Kirito/Kirito.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Hour: new Hour({
    x: 0,
    y: 0,
    direction: -97.5,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 70,
    visible: true,
    layerOrder: 3,
  }),
  Minute: new Minute({
    x: 0,
    y: 0,
    direction: -84.30000000000001,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 90,
    visible: true,
    layerOrder: 2,
  }),
  Second: new Second({
    x: 0,
    y: 0,
    direction: -18,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 50,
    visible: true,
    layerOrder: 1,
  }),
  Kirito: new Kirito({
    x: 0,
    y: 0,
    direction: 176.98524194351558,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 4,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
