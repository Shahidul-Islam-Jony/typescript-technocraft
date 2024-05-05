{   //for block scope


    const poorUser = {
        name: "Mr.X"
    }

    // learn spread operator
    //Array er jonno
    const bros1: string[] = ['Mir', 'Firoz', 'Mizan']
    const bros2: string[] = ['Tanmoy', 'Nahid', 'Rahat']
    bros1.push(...bros2);
    // object er jonno
    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    // learn Rest operator

    const greetFriends = (...friends:string[]) => {      // jodi parameter oniddistro sonkhok hoi.
        friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
    }
    
    greetFriends("abul","kabul","babul")


    // destructuring



}