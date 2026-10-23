const marks = [30, 45, 60, 75, 90];

const result = marks
.filter(m => m >= 50) 
.map(m => m + 5) 
.reduce((sum, m) => sum + m, 0); 