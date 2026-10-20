 const expenses = [
     { category: "Food", amount: 300 },
     { category: "Transport", amount: 150 },
     { category: "Shopping", amount: 400 }
];

const totalExpense = expenses.reduce((total, expense) => {
   return total + expense.amount;
   }, 0);

 console.log(`Total Expense: ₹${totalExpense}`);
