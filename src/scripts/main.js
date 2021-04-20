// Function pre-defined that creates an array of 3 arrays that each have 6 items
import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"
// Randomized plan for planting which is an imported array of arrays
const yearlyPlan = createPlan()

// Imported function from tractor.js that takes yearlyPlan as an argument.
const seedsPlanted = plantSeeds(yearlyPlan)


const harvestedArray = harvestPlants(seedsPlanted)

const catalogResult = Catalog(harvestedArray)

// console.log(yearlyPlan)
// console.log(seedsPlanted)
//console.log(harvestedArray)

const target = document.querySelector(".food");
target.innerHTML = catalogResult

// document.getElementById('food').innerHTML = catalogResult;
