const wakeDog = (dogName, dogBreed) => (`Wake ${dogName} the ${dogBreed}`);

const leashDog = (dogName, dogBreed) => (`Leash ${dogName} the ${dogBreed}`);

const walkToPark = (dogName, dogBreed) => {
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}

const throwFrisbee = (dogName, dogBreed) => {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

const walkHome = (dogName, dogBreed) => {
  return `Walk home with ${dogName} the ${dogBreed}`;
}

const  unleashDog = (dogName, dogBreed) => {
  return `Unleash ${dogName} the ${dogBreed}`;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  const successMessages = []
  routine.forEach(function(e) {successMessages.push(e(dogName, dogBreed))});
  return successMessages;
}