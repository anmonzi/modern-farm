// Function pre-defined that creates an array of 3 arrays that each have 6 items
import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
// Randomized plan for planting which is an imported array of arrays
const yearlyPlan = createPlan()

// Imported function from tractor.js that takes yearlyPlan as an argument.
const seedsPlanted = plantSeeds(yearlyPlan)


const harvestedArray = harvestPlants(seedsPlanted)



// console.log(yearlyPlan)
// console.log(seedsPlanted)
console.log(harvestedArray)
