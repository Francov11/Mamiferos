"use strict";
exports.__esModule = true;
var carnivoros_1 = require("./carnivoros");
var herviboros_1 = require("./herviboros");
var omnivoros_1 = require("./omnivoros");
var animalCarnivoro = new carnivoros_1.Carnivoros('leon', true, false);
var animalHerviboro = new herviboros_1.Herviboros('ciervo', false, true);
var animalOmnivoro = new omnivoros_1.Omnivoros('oso', false, false);
animalCarnivoro.comer();
animalHerviboro.comer();
animalOmnivoro.comer();
console.log(animalHerviboro.getDormir());
console.log(animalCarnivoro.getGenero());