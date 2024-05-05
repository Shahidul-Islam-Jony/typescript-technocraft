// Reference type --> Object

const user:{
    // readonly company:string;  // kono property k readonly kore rakhte
    company:'Programming Hero'; // Literal types--> kono type jodi strict/fixed rakhte chai,,mane ja ace tai hobe change kora jabe na.
    firstName:string;
    middleName?:string; //Optional type, jodi middle name na thake tahole error dibe na.
    lastName:string;
    isMarried:boolean;
} = {
    company:'Programming Hero',
    // company:'Programming Hero Bangladesh', // eita use kora jabe na,, jhutu literal type
    firstName: 'Shahidul',
    middleName : "Islam",
    lastName: 'Jony',
    isMarried:false,
}

