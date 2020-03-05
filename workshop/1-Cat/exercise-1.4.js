// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.



// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
    constructor(name, breed) {
        this.species = 'cat';
        this.breed = breed;
        this.name = name;
        this.tiredness = 100;
        this.hunger = 100;
        this.loneliness = 100;
        this.happiness = 100;
    }
    sleep = (hours) => { 
        this.tiredness += hours * 5;
        this.happiness += hours * 1;
    }
    eat = (gramsFood) => {
        this.hunger -= gramsFood / 5;
        this.happiness += gramsFood * 5;
        }
    play = (minutes) => {
        this.loneliness -= minutes * 3;
        this.happiness += minutes * 0.5;
        }
    wait = (minutes) => { 
        this.tiredness += minutes * 2;
        this.hunger += minutes * 3;
        this.loneliness += minutes / 5;
        this.happiness -= minutes * 0.5;
    }
}
const boots = new Cat('Boots', 'Simaese');

boots.wait(20);

console.log(boots);
