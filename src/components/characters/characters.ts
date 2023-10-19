import type { CharacterData } from "../../types";
import King from "../King/King";
import Fighter from "../Fighter/Fighter";
import Advisor from "../Advisor/Advisor";
import Squire from "../Squire/Squire";

const joffreyCharacterData: CharacterData = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "joffrey.jpg",
};

const jaimeCharacterData: CharacterData = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "jaime.jpg",
};

const daenerysCharacterData: CharacterData = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "daenerys.jpg",
};

const tyrionCharacterData: CharacterData = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "tyrion.jpg",
};

const bronnCharacterData: CharacterData = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "bronn.jpg",
};

const joffreyCharacterDataUpdate = {
  ...joffreyCharacterData,
  yearsOfReign: 2,
};

const daenerysCharacterDataUpdate = {
  ...daenerysCharacterData,
  weapon: "Dragons",
  dexterity: 10,
};

const daenerys = new Fighter(daenerysCharacterDataUpdate);

const tyrionCharacterDataUpdate = {
  ...tyrionCharacterData,
  adviseCharacter: daenerys,
};

const jaimeCharacterDataUpdate = {
  ...jaimeCharacterData,
  weapon: "sword",
  dexterity: 7,
};

const jaime = new Fighter(jaimeCharacterDataUpdate);

const bronnCharacterDataUpdate = {
  ...bronnCharacterData,
  serves: jaime,
  kissAssLevel: 0,
};

const joffrey = new King(joffreyCharacterDataUpdate);

const tyrion = new Advisor(tyrionCharacterDataUpdate);

const bronn = new Squire(bronnCharacterDataUpdate);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
