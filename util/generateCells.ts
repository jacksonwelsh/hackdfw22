import {v4 as uuidv4} from 'uuid'
import { SimulatorCell } from "../pages/simulator";
import getRandomInt from "./getRandomInt";
import events from '../assets/scenarios.json'

const NUM_CELLS = 4;

export default function generateCells() {
  const cells: SimulatorCell[] = []
  Array.from(new Array(NUM_CELLS)).map(() => {
    const cell = events.tiles[getRandomInt(0, events.tiles.length-1)];
    const id = uuidv4();
    cells.push({id, ...cell})
  })
  return cells;
}