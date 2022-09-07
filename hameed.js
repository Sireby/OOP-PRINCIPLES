//  QUESTION 1
class Hameed{
    constructor(){
        this.name = "Hameed";
        this.tribe = "Yoruba";
        this.city = "Abuja";
        this.school = "Nile University";
        this.friends = ["John", "James"];
        this.dreamjob = "Program Manager";
        
    }

// THE PRINCIPLE OF ABSTRACTION WAS APPLIED HERE.
    applytoJob(){
        console.log(`${this.name} applied for the position of a ${this.dreamjob} at SEAMFIX.`)
    }

    openAccount(){
        console.log(`${this.name} opened a domicillary account with ZENITH BANK.`)
    }

}

// INSTANCES OF THE CLASS 

let hameed = new Hameed
console.log(hameed)

let hameedApply = new Hameed
console.log(hameedApply.applytoJob())

let hameedAccount = new Hameed
console.log(hameedAccount.openAccount())



// THE PRINCIPLE OF INHERITANCE WAS APPLIED HERE.
class Friend extends Hameed{
    constructor(){
        super();
        this.school = "Nile University";
        this.friends = ["John", "James"];
    }

    friend(){
        console.log(`${this.friends} attended ${this.school} as well.`)
    }

}

let friends = new Friend
console.log(friends.friend())

// THE PRINCIPLE OF POLYMORPHISM IS APPLIED BECAUSE LINES OF CODE ARE BEING REUSED 



class Job extends Hameed{
    constructor(){
        super();
        this.name = "Hameed";
        this.school = "Nile University";
        this.course = "computer Science";
        this.experience = "Former Intern at KPMG"
        this.cgpa = 4.90;
    }

    sendCV(){
        console.log(`The following credentials were sent to SEAMFIX:-
        Name:  ${this.name}
        School: ${this.school}
        Course: ${this.course}
        WOrk Experience: ${this.experience}
        Cgpa: ${this.cgpa}`)
    }
}

let hameedCV= new Job
console.log(hameedCV.sendCV())

