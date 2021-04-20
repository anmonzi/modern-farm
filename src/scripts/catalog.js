// function that takes the harvestedFoodArray as an argument, iterates through the array and in doing so prints the name of the food in html section
export const Catalog = (harvestedFoodArray) => {
    // declaring empty string
    let htmlString = ``;
    // iterates through the harvestedFoodArray
    for (const food of harvestedFoodArray) {
        // grabbed from martin's aquarium but this creates html syntax for a section containing the name of the food by using food.type
        htmlString += `<section class="plant">${food.type}</section>`
    }
    // returning the new html string
    return htmlString
}