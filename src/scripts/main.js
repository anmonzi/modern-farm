// Function pre-defined that creates an array of 3 arrays that each have 6 items
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"
// Randomized plan for planting which is an imported array of arrays
const yearlyPlan = createPlan()

// Imported function from tractor.js that takes yearlyPlan as an argument.
const seedsPlanted = plantSeeds(yearlyPlan)

// Function that returns the amount of plants to harvest based on their output key:value pair. Function takes plants array and iterates through the array
const harvestedArray = harvestPlants(seedsPlanted)

// imported function that iterates the harvestedArray and returns the name or type of harvested food. The return is a concatenated html string, which targets the html and replaces the code with all iterations of food names
const catalogResult = Catalog(harvestedArray)



// referenced martin's aquarium on how to target a html document's queries with class name 
const target = document.querySelector(".food");
// using innerHTML on target we change/replace existing html with our catalogResult which returns the names of the harvested foods
target.innerHTML = catalogResult
