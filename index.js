// localStorage.clear();
import {addItem,addExpenseItem} from "./addItem.js";
import {showTableData,showExpenseData} from "./showTable.js";
import {prefilledData,prefilledDataExpense} from "./prefilledData.js";
import {deleteItem,deleteItemExpense} from "./deleteItem.js";
import searchData from "./searchItem.js";
import {isValidTitle,validCategory,validMonth,validateTotalAmount } from "./validate.js";


document.addEventListener("DOMContentLoaded", () => {

  //blur event 
    const ExpTitle = document.getElementById("ExpTitle");
    ExpTitle.addEventListener("blur",isValidTitle);

    const category = document.getElementById("category");
    category.addEventListener("blur",validCategory);

    const month = document.getElementById("month");
    month.addEventListener("blur",validMonth);

    const totalAmount = document.getElementById("totalAmount");
    totalAmount.addEventListener("blur",validateTotalAmount);


  //on submit storage data tp localStorage
  const registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", addItem);

  const ExpenseRegistrationForm = document.getElementById("ExpenseRegistrationForm");
  ExpenseRegistrationForm.addEventListener("submit",addExpenseItem);

  //show table data
  let storageData = localStorage.getItem("budgetData");
  storageData = JSON.parse(storageData);
  showTableData(storageData);

  //show expense table data
  let storageExpenseData = localStorage.getItem("ExpenseData");
  storageExpenseData = JSON.parse(storageExpenseData);
  showExpenseData(storageExpenseData);

  //edit the items
  const edit = document.getElementsByClassName("edit");
  prefilledData(edit);

  //delete the items
  document.getElementById('tableContent').addEventListener('click', function (event) {
    if (event.target.closest('.delete')) {
      const index = event.target.closest('.delete').getAttribute('data-index');
      deleteItem(index);
    }
  });

  //edit the items of expense
  const editExpense = document.getElementsByClassName("editExpense");
  prefilledDataExpense(editExpense);

  // delete the items of expense
  document.getElementById('tableExpenseContent').addEventListener('click', function (event) {
    if (event.target.closest('.deleteExpense')) {
      const index = event.target.closest('.deleteExpense').getAttribute('data-index');
      deleteItemExpense(index);
    }
  });
    
  //search data for expense
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input",searchData);
});

