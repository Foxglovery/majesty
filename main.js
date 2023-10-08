/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const tributeChest = []
const queens = []



const createQueen = (num, name) => {
    const queenObject = {
        id: num,
        name: name
    }

    queens.push(queenObject)
}

const payTribute = (tributeId, tributeDescription, queen) => {
const tribute = {
    id:tributeId,
    description:tributeDescription,
    queenId: queen
}
tributeChest.push(tribute)
}

createQueen(1, "Trinity Terry")

createQueen(2, "Charisse Ford")

createQueen(3, "Jenna Solis")

createQueen(4, "Brenda")

payTribute(1, "Golden Fleece", 1)

payTribute(2, "Boots", 2)

payTribute(4, "Frogs", 3)



const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

// for (const queen of queens) {
//     const hailMessage = hailTheQueen(queen.name)
//     console.log(hailMessage)
// }

for (queen of queens) {

    for(tribute of tributeChest) {
       if(tributeChest.queenId === queens.id) {
        console.log(`${queen.name} has tribute ${tribute.id} ${tribute.description} `)
    }
    }}