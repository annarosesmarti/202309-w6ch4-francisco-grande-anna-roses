import { Fighter } from "../Fighter/Fighter";
import { King } from "../King/King";
import { type KingData } from "../../types";
import { type FighterData } from "../../types";

const joffreyData: KingData = {
  family: "Casa Baratheon de Desembarco",
  age: 13,
  img: "joffrey.jpg",
  name: "Joffrey",
  yearsOfReign: 1,
};

const jaimeData: FighterData = {
  name: "Jaime",
  family: "Lannister",
  age: 40,
  img: "jaime.jpg",
  dexterity: 7,
  weapon: "sword",
};

const daenerysData: FighterData = {
  name: "Daenerys",
  age: 26,
  family: "Casa Targaryen",
  img: "daenerys.jpg",
  dexterity: 9,
  weapon: "spear",
};

const joffrey = new King(joffreyData);
const jaime = new Fighter(jaimeData);
const daenerys = new Fighter(daenerysData);

export const characters = [joffrey, jaime, daenerys];
