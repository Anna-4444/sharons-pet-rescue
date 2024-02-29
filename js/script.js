const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPets = function (name, species, isTired) {
    const Pets = {
        name: name,
        species: species,
        isTired: isTired, // scale 1-5, 5 = too tired
        sleep: function () {
            console.log(`${this.name} needs a nap. Zzzz...`);
            this.isTired = 1; // reset to 1 after the nap.
        },
        playtime: function () {
            if (this.isTired === 5) {
                console.log(`${this.name} is too tired to play`);
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired += 1;
            }
        }
    };
    return Pets;
};

const sora = createPets("Sora", "ferret", 1);
const clover = createPets("Clover", "rabbit", 2);
const baxter = createPets("Baxter", "hamster", 4);
const cleo = createPets("Cleo", "rat", 5);
const francine = createPets("Francine", "turtle", 3);

const allPets = [sora, clover, baxter, cleo, francine];

const showPetStatus = function (array) {
    for (let pet of array) {    
        let status = "";
        if (pet.isTired === 5) {
            status = "sleeping!";
            pet.playtime();
            } else {
            status = "ready to play!";
            pet.playtime();
            } 
        const li = document.createElement("li");
        li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
        pets.append(li);
        } 
};

statusButton.addEventListener("click", function () {
    pets.innerHTML = "";
    showPetStatus(allPets);
});




