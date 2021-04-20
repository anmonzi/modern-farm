// Import factory functions for each plant to use in function below
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
// Import addPlant and usePlants functions to utilize in function below
// addPlant takes a seed object as an argument and pushes it into an empty array
// usePlants simply returns the array of plants that is generated by addPlant
import { addPlant, usePlants } from "./field.js"


// Function that accepts the year's planting plan array as a parameter
export const plantSeeds = (yearlyPlantingPlan) => {
    //Need to iterate through top level of array
    for (const plan of yearlyPlantingPlan) {
        //Need to iterate through children arrays
        for (let j = 0; j < plan.length; j++) {
            //Switch statement in place of If..Else if --- if plan = seed name then add the creation of plant to array
            switch (plan[j]) {
                case "Asparagus":
                    addPlant(createAsparagus())
                break;
                case "Corn":
                    addPlant(createCorn())
                break;
                case "Potato":
                    addPlant(createPotato())
                break;
                case "Soybean":
                    addPlant(createSoybean())
                break;
                case "Sunflower":
                    addPlant(createSunflower())
                break;
                case "Wheat":
                    addPlant(createWheat())
                break;
                default:
                    console.log("Error")
            }
        }
    }
    return usePlants()
}