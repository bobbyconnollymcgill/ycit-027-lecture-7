// The static methods of Promises

// Promise.resolve()
// Promise.reject()
// Promise.all()
// Promise.allSettled()
// Promise.any()
// Promise.race()

class Pet {
    constructor(nameOfPet) {
        this.nameOfPet = nameOfPet;
    }

    static theStaticMethod = () => {
        console.log("hello... from static method");
    };

    getNameOfPet = () => {
        return this.nameOfPet;
    };
}

const pet = new Pet("taco");
const pet2 = new Pet("smokey");

console.log(pet.nameOfPet);
console.log(pet.getNameOfPet());
console.log(pet2.getNameOfPet());

Pet.theStaticMethod();
