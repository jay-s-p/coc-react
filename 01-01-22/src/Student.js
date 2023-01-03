export default class Student {
    constructor(name, birthdate, gender, enrollment, program, semester, subjects, marks) {
        this.name = name
        this.birthdate = birthdate
        this.gender = gender
        this.enrollment = enrollment
        this.program = program
        this.semester = semester
        this.subjects = subjects
        this.marks = marks
    }
    getAge() {
        var today = new Date();
        var birthDate = new Date(this.birthdate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    getResultPercentage() {
        let sum = 0;
        for (let mark of this.marks)
            sum += mark;
        return sum / this.subjects.length;
    }
    getName() {
        return this.name;
    }
    getBirthdate() {
        return this.birthdate;
    }
    getGender() {
        return this.gender;
    }
    getEnrollment() {
        return this.enrollment;
    }
    getProgram() {
        return this.program;
    }
    getSemester() {
        return this.semester;
    }
    getSubjects() {
        return this.subjects;
    }
    getMarks() {
        return this.marks;
    }

    setName(name) {
        this.name = name;
    }
    setBirthdate(birthdate) {
        this.birthdate = birthdate;
    }
    setGender(gender) {
        this.gender = gender;
    }
    setEnrollment(enrollment) {
        this.enrollment = enrollment;
    }
    setProgram(program) {
        this.program = program;
    }
    setSemester(semester) {
        this.semester = semester;
    }
    setSubjects(subjects) {
        this.subjects = subjects;
    }
    setMarks(marks) {
        this.marks = marks;
    }

}

//let s = new Student("Jay","2002/11/11","Male",211002028,"B.Tech","6th",["MCI","EBM","TOC"],[60,60,60])
//let s = new Student("Harshad","2003/04/11","Male",211002034,"B.Tech","6th",["MCI","EBM","TOC"],[80,80,80])