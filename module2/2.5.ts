{
    //
    // Function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }
    const res1 = createArray('Bangladesh')

    // generic function
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }


    const resGeneric = createArrayWithGeneric<boolean>(true)
    const resGeneric1 = createArrayWithGeneric<string>('Bangladesh')

    interface User {
        id: number;
        name: string;
    }
    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: 'Mr. X'
    })

    // Tuple

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }


    const resGenericTuple = createArrayWithTuple<string, number>('Bangladesh', 8801)
    const resGenericTuple1 = createArrayWithTuple<string, { name: string }>('Bangladesh', {
        name: 'Asia'
    })

    // 

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web dev'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        name: 'Mr. X',
        email: 'x@gmail.com',
        devType: 'NLWD'
    })
    const student2 = addCourseToStudent({
        name: 'Mr. Y',
        email: 'y@gmail.com',
        hasWatch: 'Apple'
    })



    // 
}