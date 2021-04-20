// Empty Array 
const plantsInField = []

// Function to push added seedObject to plantsInField Array
export const addPlant = (seedObject) => {
    // If seedObject is corn, check if it's an array, if yes push each individual corn object into empty array 
    if (Array.isArray(seedObject)) {
        for (const cornObj of seedObject) {
            plantsInField.push(cornObj)
        }
        // Else just push seedObject into empty array as is
    } else {
        plantsInField.push(seedObject)
    }
    
}


// Function to return a copy of the plantsInField Array
export const usePlants = () => {
    return plantsInField
}