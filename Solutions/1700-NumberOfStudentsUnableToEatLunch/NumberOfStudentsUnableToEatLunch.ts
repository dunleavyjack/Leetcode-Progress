function countStudents(students: number[], sandwiches: number[]): number {
    let skippedStudents = 0;

    while (skippedStudents !== students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            skippedStudents = 0;
        } else {
            const firstStudent = students.shift();
            students.push(firstStudent!);
            skippedStudents++;
        }
    }

    return students.length;
}
