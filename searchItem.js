import { showExpenseData } from "./showTable.js";

function searchData() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  let storageData = localStorage.getItem("ExpenseData");
  storageData = JSON.parse(storageData) ?? [];
  
  const filterData = storageData.filter((item) => {
    const expenseAmountStr = item.ExpenseAmount.toString();
    return (
      item.ExpenseCategory.toLowerCase().includes(searchInput) ||
      item.ExpenseTitle.toLowerCase().includes(searchInput) ||
      item.Expensemonth.toLowerCase().includes(searchInput) ||
      expenseAmountStr.includes(searchInput)
    );
  });

  showExpenseData(filterData);
}

export default searchData;
