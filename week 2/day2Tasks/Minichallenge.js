const students = [
    { name: "Aman", score: 85 },
    { name: "Sara", score: 42 },
    { name: "Riya", score: 68 },
    { name: "John", score: 49 }
];
const passedStudents = students.filter(student => student.score >= 50);
const updatedStudents = passedStudents.map(student => ({
    ...student,
    score: student.score + 5
}));
updatedStudents.forEach(student => {
    console.log(`${student.name}: ${student.score}`);
});
const totalScore = updatedStudents.reduce(
    (total, student) => total + student.score, 0
);
const classAverage = updatedStudents.length > 0
    ? totalScore / updatedStudents.length
    : 0;

console.log("Total Score:", totalScore);
console.log("Class Average:", classAverage.toFixed(2));