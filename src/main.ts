interface Student {
    id: string;
    name: string;
    age: number;
}

type Subject = "Math" | "Science" | "Literature" | "History";

type Grades = Record<Subject, number>;

interface UniversityRecord {
    students: Record<string, Student>;
    grades: Record<string, Grades>;
}

const universityRecord: UniversityRecord = {
    students: {
        '1': { id: '1', name: 'Alice', age: 23 },
        '2': { id: '2', name: 'Mike', age: 35 },
        '3': { id: '3', name: 'Oleg', age: 38 }
    },
    grades: {
        '1': { Math: 97, Science: 91, Literature: 78, History: 99 },
        '2': { Math: 85, Science: 50, Literature: 79, History: 80 },
        '3': { Math: 75, Science: 89, Literature: 93, History: 83 }
    }
};

const getStudentGrades = (universityRecord: UniversityRecord, studentId: string): Grades | undefined => {
    return universityRecord.grades[studentId];
};

const getAverageGrade = (universityRecord: UniversityRecord, subject: Subject): number => {
    const allGrades = Object.values(universityRecord.grades)
        .map(grades => grades[subject])
        .filter(grade => grade !== undefined);

    const total = allGrades.reduce((sum, grade) => sum + grade, 0);
    return allGrades.length > 0 ? total / allGrades.length : 0;
};


console.log(getStudentGrades(universityRecord, '1'));
console.log(getAverageGrade(universityRecord, 'Math'));
