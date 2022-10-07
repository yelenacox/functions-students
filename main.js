const createStudent = (name, grade) => {
    const newStudent = {
        name: name,
        grade: grade
    }
    return newStudent
}

const addMathGrade = (studentObject) => {
    studentObject.math = "B"
    return studentObject
}

const addHistoryGrade = (studentObject) => {
    studentObject.history = "C"
    return studentObject
}

const addScienceGrade = (studentObject) => {
    studentObject.science = "A"
    return studentObject
}

let student = createStudent("Bob", 7)
console.log(student)

let math = addMathGrade(student)
console.log(student)

let history = addHistoryGrade(student)
console.log(student)

let science = addScienceGrade(student)
console.log(student)