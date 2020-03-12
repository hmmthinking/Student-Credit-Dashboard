import { Class } from './class';

export class Student {
    firstName: string; // the student's first name
    lastName: string; // the student's last name
    classes: Array<Class> = new Array<Class>(); // holds the classes that the student is taking and has completed
    advisor: string; // the student's advisor
    gpa: string; // the student's GPA
    major: string;  // the student's major
    majorDeclaredOn: string; // when the student's major was declared
    minor: string; // the student's minor
    minorDeclaredOn: string; // when the student's minor was declared
    status: string; // the student's status: freshman, sophomore, etc.
    expectedGraduation: string; // when the student is expected to graduate
    totalCreditsRequired: number; // the amount of credits the user needs to graduate. This would be done differently.
}