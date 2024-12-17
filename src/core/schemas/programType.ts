export type ProgramType = {
    program: {
        day: number,
        category: string,
        sets: Exercises[]
    }
}

export type Exercises = {
    is_superset: boolean,
    repetitions: number,
    interval: number,
    weight: number,
    exercises: Exercise[]
}

export type Exercise = {
    id: string,
    name: string,
    url: string
}
