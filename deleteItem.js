import {showTableData,showExpenseData} from "./showTable.js";
function deleteItem(index){
    const modalElement = document.getElementById("deleteModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    // fix this later.
    const deleteData = document.getElementById("deletedata");
    deleteData.addEventListener("click", function () {
      const tableData = localStorage.getItem("budgetData");
      const data = JSON.parse(tableData);
      data.splice(index, 1);
      localStorage.setItem("budgetData", JSON.stringify(data));
      modal.hide();
      showTableData(data);
  }
)}

function deleteItemExpense(index){
  const modalElement = document.getElementById("deleteModal");
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
  const deleteData = document.getElementById("deletedata");
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
}
)}

export {deleteItem,deleteItemExpense}