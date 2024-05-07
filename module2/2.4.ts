{
    //
    // Generic Interface

    interface Developer<T, X = null> {            //generic interface <T> te type parameter gulo pathano jai.
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X;
    }



    interface watch {
        brand: string;
        model: string;
        display: string;
    }


    const poorDeveloper: Developer<watch> = {     // sending type paramerter to T;
        name: 'Jony',
        computer: {
            brand: 'Dell',
            model: 'Vostro 3401',
            releaseYear: 2022,
        },

        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'OLED',
        }
    }

    // const richDeveloper: Developer<{
    //     brand: string;
    //     model: string;
    //     heartTrack: boolean;
    //     sleepTrack: boolean;
    // }> = {
    //     name: 'Rodix',
    //     computer: {
    //         brand: 'HP',
    //         model: 'X-25UR',
    //         releaseYear: 2023,
    //     },

    //     smartWatch: {
    //         brand: 'Apple Watch',
    //         model: 'Something',
    //         heartTrack: true,
    //         sleepTrack: true,
    //     }
    // }

    type EmilabWatch = {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    // interface EmilabWatch{       // you can use interface also
    //     brand: string;
    //     model: string;
    //     heartTrack: boolean;
    //     sleepTrack: boolean;
    // }

    interface Bike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<EmilabWatch, Bike> = {
        name: 'Rodix',
        computer: {
            brand: 'HP',
            model: 'X-25UR',
            releaseYear: 2023,
        },

        smartWatch: {
            brand: 'Apple Watch',
            model: 'Something',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: 'Yamaha',
            engineCapacity: '150cc'
        }
    }





    //
}