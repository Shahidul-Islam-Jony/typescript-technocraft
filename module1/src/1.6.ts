// Function
// 1. Normal function  2. Arrow function


// normal function
function add(num1: number, num2: number): number {      // :number is return type // add(num1:number=10) eivabe default value o dewa jai.
    return num1 + num2;
}

add(2, 4)

// Arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(3, 5);

//  object er modhee kono function thakle method bole
const poorUser = {
    name: 'Rodix',
    balance: 0,
    addBalance(balance: number): string {   //prothom return hole return type string na hoye number hobe.
        // return this.balance + balance;      //object er modhee function a kono property bebohar korte hole this bebohar korte hoi
        return `My Balance is ${this.balance + balance}`
    }
}


// call back / map function 
const arr : number[] = [1,4,10];

const newArray :number[] = arr.map((elem:number):number => elem*elem);

