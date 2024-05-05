{
    //

    // Ternary operator , optional chaining,  nullish coalescing operator


    const age: number = 18
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('Not adult');
    }

    // Ternary operator
    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log({ isAdult });


    // nullish coalescing operator  // null and undifined er upor vitti kore kono dessicion nite bebohar hoi
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest'
    console.log({ result1 });


    // Optional chaining

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: 'Rodix',
        address:{
            city:'Raj',
            road:'natore',
            presentAddress:'Lalpur'
        }
    }

    const permanentAddress = user?.address?.permanentAddress??'No permananet address'
    console.log({permanentAddress});


    //
}