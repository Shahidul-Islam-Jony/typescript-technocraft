{
    // 
    // generic type

    type GenericArray<T> = Array<T>     //generic type declaration

    // const rollNumbers: number[] = [3,6,8];
    // const rollNumbers: Array<number>= [3,6,8];
    const rollNumbers: GenericArray<number> = [3, 6, 8];

    // const mentors:string[] = ['mr. x','Mr. Y', 'Mr. z'];
    // const mentors:Array<string> = ['mr. x','Mr. Y', 'Mr. z'];
    const mentors: GenericArray<string> = ['mr. x', 'Mr. Y', 'Mr. z'];

    // const boolArray:boolean[] =[true,false,true];
    // const boolArray:Array<boolean> =[true,false,true];
    const boolArray: GenericArray<boolean> = [true, false, true];


    const user: GenericArray<{name:string,age:number}> = [      //generic object declaration
        {
            name: 'Mezba',
            age: 100
        },
        {
            name: 'Jhankar Mahbub',
            age: 110
        }
    ]

    // generic tuple

    type GenericTuple<X,Y> = [X,Y]

    const manush:GenericTuple<string,string> = ['Mr. X','Mr. Y']

    const userWithID:GenericTuple<number,{name:string,email:string}> = [1234,{name:'Rodix',email:'rodix@gmail.com'}]



    // 
}