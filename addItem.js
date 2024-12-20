import {isValidTitle,validCategory,validMonth,validateTotalAmount } from "./validate.js";
import {showTableData,showExpenseData} from "./showTable.js";
import calculateExpenses from "./calculateExpense.js";

function addItem(event) {
  event.preventDefault();

  const { month, totalAmount } = registrationForm.elements;
  const category = document.getElementById("category");
  let id =0;
  if (!validCategory() && !validMonth() && !validateTotalAmount()) {
    debugger
    return;
  } else {
    debugger
    // get and set data to localstorage  
    let storageData = localStorage.getItem("budgetData");
    console.log(storageData);

    if (!storageData) {
      storageData = [];
      id=1;
    } 
     else {
      if(storageData == "[]")
      {
        storageData = [];
        id=1;
      }
      else{
        storageData = JSON.parse(storageData);
        console.log(storageData);
        const totalPerson = storageData.length; 
        id = storageData[totalPerson - 1].id;
        id = id + 1;
      }
    }

    const data = {
      id:id,
      category: category.value,
      month: month.value,
      totalAmount: totalAmount.value,
    };

    storageData.push(data);
    localStorage.setItem("budgetData", JSON.stringify(storageData));
    registrationForm.reset(); 
    const modal = document.getElementById("addItemModal");
    if (modal) {
        modal.style.display = "none";
        
        const backdrop = document.querySelector(".modal-backdrop");
        if (backdrop) {
            backdrop.remove();
        }
        document.body.style.overflow = "auto";
    }
    showTableData(storageData);
  }
}




function addExpenseItem(event) {
  event.preventDefault();

  const { ExpTitle, Expmonth, Expamount } = ExpenseRegistrationForm.elements;
  const expenseCategory = document.getElementById("expenseCategory");

  let budgets = localStorage.getItem("budgetData");
  budgets = JSON.parse(budgets);
  
  let budget = budgets.find(val => val.category === expenseCategory.value && val.month === Expmonth.value);
  
  if (!budget || (budget.totalAmount - calculateExpenses(expenseCategory.value, Expmonth.value) < Expamount.value)) {
    alert("The selected category and month do not have sufficient budget");
    return; 
  }

  if (!isValidTitle()) {
    return;
  } else {
    let storageData = localStorage.getItem("ExpenseData");

    if (!storageData) {
      storageData = [];
    } else {
      storageData = JSON.parse(storageData);
    }

    const data = {
      ExpenseCategory: expenseCategory.value,
      ExpenseTitle: ExpTitle.value,
      Expensemonth: Expmonth.value,
      ExpenseAmount: Expamount.value,
    };

    storageData.push(data);
    
    localStorage.setItem("ExpenseData", JSON.stringify(storageData));
    ExpenseRegistrationForm.reset();

    const modal = document.getElementById("addExpenseItemModal");
    
    if (modal) {
      modal.style.display = "none";

      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) {
        backdrop.remove();
      }

      document.body.style.overflow = "auto";
    }

    showExpenseData(storageData);

    // update budget table data
    let budgetStorageData = localStorage.getItem("budgetData");
    budgetStorageData = JSON.parse(budgetStorageData);
    showTableData(budgetStorageData);
  }
}


export {addItem,addExpenseItem}











