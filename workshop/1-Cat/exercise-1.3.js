// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.


// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

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
//    care = () => { this.happiness = this.happiness + (2 * sleep) + (1 * eat) + (0.5 * play) }
}
const boots = new Cat('Boots', 'Simaese');

boots.sleep(10);
boots.eat(5);
boots.play(2);

console.log(boots);
