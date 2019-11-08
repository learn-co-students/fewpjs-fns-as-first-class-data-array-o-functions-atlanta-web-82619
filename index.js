function wakeDog(dog, breed){
    return `Wake ${dog} the ${breed}`
}

function leashDog(dog, breed){
    return `Leash ${dog} the ${breed}`
}

function walkToPark(dog, breed){
    return `Walk to the park with ${dog} the ${breed}`
}

function throwFrisbee(dog, breed) {
    return `Throw the frisbee for ${dog} the ${breed}`
}

function walkHome(dog, breed) {
    return `Walk home with ${dog} the ${breed}`
}

function unleashDog(dog, breed){
    return `Unleash ${dog} the ${breed}`
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed){
    return routine.map(f => f(dog, breed))
}