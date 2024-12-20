function calculateExpenses(category, month) {
  let storageExpenseData = localStorage.getItem("ExpenseData");
  storageExpenseData = JSON.parse(storageExpenseData);

  if (storageExpenseData) {
    let total = 0;
    for (let i = 0; i < storageExpenseData.length; i++) {
      let expense = storageExpenseData[i];
      if (
        expense.ExpenseCategory === category &&
        expense.Expensemonth === month
      ) {
        total += Number(expense.ExpenseAmount);
      }
    }
    return total;
  }
}

export default calculateExpenses;
