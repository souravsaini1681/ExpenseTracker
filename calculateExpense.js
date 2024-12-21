function calculateExpenses(category, month) {
  // debugger
  let storageExpenseData = localStorage.getItem("ExpenseData");
  if (!storageExpenseData) {
    return 0;
  }
  storageExpenseData = JSON.parse(storageExpenseData);
  let total = storageExpenseData.reduce((acc,expense) => {
    if (
      expense.ExpenseCategory === category &&
      expense.Expensemonth === month
    ) {
      return acc + Number(expense.ExpenseAmount);
    }
    return acc
  },0);
  return total;
}

export default calculateExpenses;
