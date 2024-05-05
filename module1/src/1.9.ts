{

    // Type alias

    type Student = {    // Type bar bar declare na kore type ekjaigi rekhe call kore newar jonno
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    // const student1: {
    //     name: string;
    //     age: number;
    //     gender: string;
    //     contactNo: string;
    //     address: string;
    // } = {
    //     name: 'Rodix',
    //     age: 27,
    //     gender: 'male',
    //     contactNo: '0171234567',
    //     address: 'Rajshahi'
    // }
    const student1: Student = {
        name: 'Rodix',
        age: 27,
        gender: 'male',
        contactNo: '0171234567',
        address: 'Rajshahi'
    }

    const student2: Student = {
        name: 'Jony',
        age: 25,
        gender: 'male',
        address: 'Rajshahi'
    }


    type UserName = string

    const userName: UserName = 'Rodix'


    // Type alias for function
    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;






}