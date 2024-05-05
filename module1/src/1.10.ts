{

    // Union types

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    type FullstackDeveloper = 'front-endDevelopr' | 'expertDeveloper'

    type Developer = FrontendDeveloper | FullstackDeveloper

    const newDeveloper: FrontendDeveloper = "juniorDeveloper"   // fakibazDeveloper othoba juniorDeveloper dewa jabe ,, eitai union type,, hoi eita nahoi oita


    type User = {
        name: string;
        email?: string;
        gender: "male" | "female"; // union type
        bloodGroup: "O+" | "A+" | "AB+" | "B+";
    }

    const user1: User = {
        name: 'Rodix',
        gender: 'male',
        bloodGroup: 'B+',
    }




    // Intersection Type
    type FrontendDev = {
        skills: string[];
        designation1: 'Frontend Developer'
    }

    type BackendDev = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullstackDev = FrontendDev & BackendDev


    const fullstackDeveloper: FullstackDev = {
        skills: ['HTML', 'CSS', 'Express'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }



}