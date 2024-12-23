import { showTableData, showExpenseData } from "./showTable.js";
function deleteItem(index) {
  const modalElement = document.getElementById("deleteModal");
  const modal = new bootstrap.Modal(modalElement);
  modal.show();

  const deleteData = document.getElementById("deletedata");
  deleteData.addEventListener("click", function () {
    debugger
    // check the expense in exist for these budget
    const tableData = localStorage.getItem("budgetData");
    const data = JSON.parse(tableData);
    const dataElement = data[index];
    let expenseData = localStorage.getItem("ExpenseData");
    expenseData = JSON.parse(expenseData);

    if (
      expenseData.some(
        (val) =>
          val.ExpenseCategory === dataElement.category && 
          val.Expensemonth === dataElement.month
      )
    ) {
      debugger
      alert("this budegt expense already exist");
      return;
    }
    data.splice(index, 1);
    localStorage.setItem("budgetData", JSON.stringify(data));
    modal.hide();
    showTableData(data);
  });
}

function deleteItemExpense(index) {
  const modalElement = document.getElementById("deleteModalExpense");
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
  const deleteData = document.getElementById("deletedataExpense");
  deleteData.addEventListener("click", function () {
    const tableData = localStorage.getItem("ExpenseData");
    const data = JSON.parse(tableData);
    data.splice(index, 1);
    localStorage.setItem("ExpenseData", JSON.stringify(data));
    modal.hide();
    showExpenseData(data);

    let storageBudgetData = localStorage.getItem("budgetData");
    storageBudgetData = JSON.parse(storageBudgetData);
    showTableData(storageBudgetData);
  });
}

export { deleteItem, deleteItemExpense };
