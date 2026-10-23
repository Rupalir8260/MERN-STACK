const scores = [45, 80, 90, 35, 60, 75];
const passingScores = scores.filter(score => score >= 50);//filter

const bonusScores = passingScores.map(score => score + 10);//bonus marks

const total = bonusScores.reduce((sum, score) => sum + score, 0);// calculate using reduce

console.log("Passing Scores:", passingScores);
console.log("Scores After Bonus:", bonusScores);
console.log("Total Score:", total);