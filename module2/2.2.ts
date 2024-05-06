{
    // 

    // Interface

    type User1 = {
        name: string;
        age: number;
    }
    interface User2 {        //interface type declare er moto.
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string }   // & intersection

    interface UserWithRole2 extends User2 {
        role: string;
    }
    // interface UserWithRole2 extends User1 {      //interfac er sathe type keo extend kora jai
    //     role: string;
    // }

    const user1: UserWithRole1 = {
        name: 'Rodix',
        age: 100,
        role: 'manager'
    }

    const user2: UserWithRole2 = {
        name: 'Rodix',
        age: 100,
        role: 'manager'
    }



    // const user1: User2 = {          // const user:User1{}   
    //     name: 'Rodix',
    //     age: 100,
    // }


    // js --> object, array--> object, function -->object

    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number
    }

    const rollNumber1: Roll1 = [1, 2, 3]

    const rollNumber2: Roll2 = [1, 2, 3]


    // 
    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => num1 + num2

    interface Add2 {
        (num1: number, num2: number): number
    }

    const add2: Add2 = (num1 , num2)=> num1 + num2



    // 
}