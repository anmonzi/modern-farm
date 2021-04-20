import { createPlan } from "./plan.js"

import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"


const yearlyPlan = createPlan()

const seedsPlanted = plantSeeds(yearlyPlan)


// addPlant(potatoSeed)
// addPlant(asparagusSeed)
// addPlant(wheatSeed)
// addPlant(cornSeed)
// const showPlantsInField = usePlants()





console.log(yearlyPlan)
console.log(seedsPlanted)
