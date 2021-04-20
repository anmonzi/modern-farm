// declared function to create seed object - when invoked it returns the stored seed object
export const createCorn = () => {
    const seedArray = [
        {
            type: "Corn",
            height: 180,
            output: 6
        },
        {
            type: "Corn",
            height: 180,
            output: 6
        }
    ]
    return seedArray
}