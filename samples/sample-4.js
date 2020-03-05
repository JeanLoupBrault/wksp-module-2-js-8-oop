class Student {
    constructor() {
        this.excitement = 1;
        this.learn = 2;
    }

    writeCode = () => { 
        this.learn = 0;
        this.learn(); }
}

let bob = new Student();
bob.writeCode();