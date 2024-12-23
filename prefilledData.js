import {isValidTitle,validCategory,validMonth,validateTotalAmount,isBudgetExist,validExpCategory,validExpMonth,validExpAmount } from "./validate.js";
import { showTableData, showExpenseData } from "./showTable.js";
import calculateExpenses from "./calculateExpense.js";

// function for prefilled form data
function prefilledData(mode) {
  const parentElement = document.getElementById("tableContent");

  parentElement.addEventListener("click", (event) => {
    const editButton = event.target.closest(".edit");
    if (!editButton) return;

    const index = editButton.getAttribute("data-index");
    const tableData = localStorage.getItem("budgetData");
    const data = JSON.parse(tableData);
    const budgetData = data[index];

    // Prefill form fields with existing data
    document.getElementById("category").value = budgetData.category;
    document.getElementById("month").value = budgetData.month;
    document.getElementById("totalAmount").value = budgetData.totalAmount;

    // Show modal for editing
    const modalElement = document.getElementById("addItemModal");

    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    // Handle saving the form changes
    const saveFormChanges = document.getElementById("saveFormChanges");
    saveFormChanges.addEventListener("click", function (event) {
      event.preventDefault();

      const updatedData = {
        id: budgetData.id,
        category: document.getElementById("category").value,
        month: document.getElementById("month").value,
        totalAmount: document.getElementById("totalAmount").value,
      };

      if (
        !validCategory() ||
        !validMonth() ||
        !validateTotalAmount() ||
        !isBudgetExist()
      ) {
        return;
      } else {
        // Update the localStorage
        data[index] = updatedData;
        localStorage.setItem("budgetData", JSON.stringify(data));
        modal.hide();
        showTableData(data);
      }
    });
  });
}

function prefilledDataExpense(mode) {
  const parentElement = document.getElementById("tableExpenseContent");

  parentElement.addEventListener("click", (event) => {
    const editButton = event.target.closest(".editExpense");
    if (!editButton) return;

    const index = editButton.getAttribute("data-index");
    const tableData = localStorage.getItem("ExpenseData");
    const data = JSON.parse(tableData);
    const ExpnseData = data[index];

    // Prefill form fields with existing data
    document.getElementById("expenseCategory").value =
      ExpnseData.ExpenseCategory;
    document.getElementById("ExpTitle").value = ExpnseData.ExpenseTitle;
    document.getElementById("Expmonth").value = ExpnseData.Expensemonth;
    document.getElementById("Expamount").value = ExpnseData.ExpenseAmount;

    // Show modal for editing
    const modalElement = document.getElementById("addExpenseItemModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    // Handle saving the form changes
    const saveFormChanges = document.getElementById("saveExpenseFormChanges");
    saveFormChanges.addEventListener("click", function (event) {
      event.preventDefault();

      const updatedData = {
        // id: ExpnseData.id,
        ExpenseCategory: document.getElementById("expenseCategory").value,
        ExpenseTitle: document.getElementById("ExpTitle").value,
        Expensemonth: document.getElementById("Expmonth").value,
        ExpenseAmount: document.getElementById("Expamount").value,
      };
      let budgets = localStorage.getItem("budgetData");
      budgets = JSON.parse(budgets);

      let budget = budgets.find(
        (val) =>
          val.category === expenseCategory.value && val.month === Expmonth.value
      );

      if (
        !budget ||
        budget.totalAmount -
          calculateExpenses(expenseCategory.value, Expmonth.value) <
          Expamount.value
      ) {
        alert("The selected category and month do not have sufficient budget");
        return;
      }

      if (!isValidTitle() || !validExpCategory() || !validExpMonth() || !validExpAmount() ) {
        return;
      } else {
        // Update the localStorage
        data[index] = updatedData;
        localStorage.setItem("ExpenseData", JSON.stringify(data));
        modal.hide();
        showExpenseData(data);

        //update budget table data
        let budgetData = localStorage.getItem("budgetData");
        budgetData = JSON.parse(budgetData);
        showTableData(budgetData);
      }
    });
  });
}

export { prefilledData, prefilledDataExpense };
