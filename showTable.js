import calculateExpenses from "./calculateExpense.js";
//show in table content
function showTableData(tableData) {
  const tableContent = document.getElementById("tableContent");
  tableContent.innerHTML = "";

  if (tableData) {
    tableData.forEach((item, index) => {
      const row = document.createElement("tr");

      let availableAmount =
        item.totalAmount - calculateExpenses(item.category, item.month);
      if (isNaN(availableAmount) || availableAmount === undefined) {
        availableAmount = item.totalAmount;
      }

      row.innerHTML = `
           <td>${item.category}</td>
           <td>${item.month}</td>
           <td>${item.totalAmount}</td>
           <td>${availableAmount}</td> 
           <td>
            <i class="bi bi-pencil-fill edit" data-index="${index}"></i>
            <i class="bi bi-trash delete" data-index="${index}"></i>
           </td>`;
      tableContent.appendChild(row);
    });
  }
}

//show table data for expense
function showExpenseData(tableData) {
  const tableExpenseContent = document.getElementById("tableExpenseContent");
  tableExpenseContent.innerHTML = "";
  if (tableData) {
    tableData.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
           <td>${item.ExpenseCategory}</td>
           <td>${item.ExpenseTitle}</td>
           <td>${item.Expensemonth}</td>
           <td>${item.ExpenseAmount}</td> 
           <td>
            <i class="bi bi-pencil-fill editExpense" data-index="${index}"></i>
            <i class="bi bi-trash deleteExpense" data-index="${index}"></i>
           </td>`;
      tableExpenseContent.appendChild(row);
    });
  }
}

export { showTableData, showExpenseData };
