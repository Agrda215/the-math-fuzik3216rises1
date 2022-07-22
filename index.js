import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: -194,
    y: 153,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true
  }),
  Sprite2: new Sprite2({
    x: 16,
    y: 54,
    direction: 90,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: false
  }),
  Sprite3: new Sprite3({
    x: -3.3954254356554703,
    y: -160.53749382251465,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true
  }),
  Sprite4: new Sprite4({
    x: -127.35794453625965,
    y: 154.6423790685254,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true
  }),
  Sprite5: new Sprite5({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite6: new Sprite6({
    x: -1.6511986744764044,
    y: 10.629680433740958,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: true
  }),
  Sprite7: new Sprite7({
    x: -61.67761369435702,
    y: 153.54506097819868,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true
  }),
  Sprite8: new Sprite8({
    x: -67.3987853135845,
    y: 59.52968863282436,
    direction: 90,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: false
  }),
  Sprite9: new Sprite9({
    x: -25,
    y: -10,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
