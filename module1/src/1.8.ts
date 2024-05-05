{ //block scope

    // Destructuring

    // object destructuring
    const user = {
        id: 345,
        name: {
            firstName: 'Shahidul',
            middleName: 'Islam',
            lastName: 'Jony'
        },
        contactno: '017123456',
        address: 'Rajshahi'
    };

    const {contactno} = user;
    const {name:{middleName}} = user;

    const {name:{middleName:midName}} = user;   // kono short nam diye destructuring korte chaile

    // Array destructuring
    const myFriends = ['chandler','joey','ross','rachel','monica','phoebe']
    const [a,b,c] = myFriends; // serially a,b,c te nam gulo ashbe.
    const [,,bestFriend] = myFriends; // kono value skip kore niddristo value nite
    const [,,thirdFriend,...otherFriends] = myFriends; // ...otherFriends er modhee baki friend gulo store hobe




} //block scope