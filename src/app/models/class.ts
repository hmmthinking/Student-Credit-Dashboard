enum Status {
    InProgress = 1,
    Completed, // typescript automatically increments enums once one is declared
}
export class Class {
    instructor: string; // the name of the course instrctor
    courseName: string; // the course name
    courseNum: string; // the course number e.g. CS 495
    creditHours: number; // the amount of credit hours that the class counts for
    classStatus: Status; // the program will select a class status that makes sense
    location: string; // the location/building that the class is held in
    time: string; // the time of day the class is held
    days: string; // the days that the class is held
    yearTaken: string; // this gets set once the class is completed
    semesterTaken: string // this gets set once the class is completed
}