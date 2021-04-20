// Declared and exported function that returns the amount of plants to harvest based on their output key:value pair. Function takes plants array and iterates through the array
export const harvestPlants = (plantsArray) => {
    // Empty array declared to then return at end of function
    const harvestArray = []
    // for loop to iterate through plantsArray
    // if..else conditional used - if the type is corn we push half the amount of output to the plantsArray
    // else iterate through plantsArray and push the plant x amount of times based on "output" key:value pair 
    for (const plant of plantsArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
                harvestArray.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                harvestArray.push(plant)
            }
        }
    }
    return harvestArray
}