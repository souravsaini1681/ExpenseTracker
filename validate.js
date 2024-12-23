function isBudgetExist() {
  const errorBudget = document.getElementById("errorBudget");
  const category = document.getElementById("category");
  const month = document.getElementById("month");

  let storageData = localStorage.getItem("budgetData");

  if (!storageData) {
    errorBudget.innerHTML = "";
    return true;
  }

  storageData = JSON.parse(storageData);
  if (
    !storageData.some(
      (val) => val.category === category.value && val.month === month.value
    )
  ) {
    errorBudget.innerHTML = "";
    return true;
  } else {
    errorBudget.innerHTML = "These budget and month already exist";
    return false;
  }
}

// validate budget category
function validCategory() {
  const errorCategory = document.getElementById("errorCategory");
  const category = document.getElementById("category");

  if (category.value.trim()) {
    errorCategory.innerHTML = "";
    category.classList.add("is-valid");
    category.classList.remove("is-invalid");
  } else {
    errorCategory.innerHTML = "please select the category";
    category.classList.add("is-invalid");
    category.classList.remove("is-valid");
    return false;
  }
  return true;
}

// validate budget month
function validMonth() {
  const errorMonth = document.getElementById("errorMonth");
  const month = document.getElementById("month");

  if (month.value.trim()) {
    errorMonth.innerHTML = "";
    month.classList.add("is-valid");
    month.classList.remove("is-invalid");
  } else {
    errorMonth.innerHTML = "please select the month";
    month.classList.add("is-invalid");
    month.classList.remove("is-valid");
    return false;
  }
  return true;
}

//validate budget totalAmount
function validateTotalAmount() {
  const errorTotalAmount = document.getElementById("errortotalAmount");
  const totalAm = document.getElementById("totalAmount");

  const totalAmount = parseInt(totalAm.value);
  if (totalAmount >= 1000 && totalAmount <= 50000) {
    errorTotalAmount.innerHTML = "";
    totalAm.classList.add("is-valid");
    totalAm.classList.remove("is-invalid");
    return true;
  } else {
    errorTotalAmount.innerHTML =
      "Total amount must be greater than 1000 and less than 50000.";
    totalAm.classList.add("is-invalid");
    totalAm.classList.remove("is-valid");
    return false;
  }
}

// validate expense category
function validExpCategory() {
  const errorExpCategory = document.getElementById("errorExpCategory");
  const expenseCategory = document.getElementById("expenseCategory");

  if (expenseCategory.value.trim()) {
    errorExpCategory.innerHTML = "";
    expenseCategory.classList.add("is-valid");
    expenseCategory.classList.remove("is-invalid");
  } else {
    errorExpCategory.innerHTML = "please select the category";
    expenseCategory.classList.add("is-invalid");
    expenseCategory.classList.remove("is-valid");
    return false;
  }
  return true;
}

// Validate title of Expense
function isValidTitle() {
  const errorTitle = document.getElementById("errorTitle");
  const ExpTitle = document.getElementById("ExpTitle");

  const titleLength = ExpTitle.value.length;

  if (titleLength >= 10 && titleLength <= 50) {
    errorTitle.innerHTML = "";
    ExpTitle.classList.add("is-valid");
    ExpTitle.classList.remove("is-invalid");
  } else {
    errorTitle.innerHTML = "title must be greater than 10 and less than 50";
    ExpTitle.classList.add("is-invalid");
    ExpTitle.classList.remove("is-valid");
    return false;
  }
  return true;
}

// validate expense month
function validExpMonth(){
    const errorExpMonth = document.getElementById("errorExpMonth");
    const Expmonth = document.getElementById("Expmonth");

    if (Expmonth.value.trim()) {
        errorExpMonth.innerHTML = "";
        Expmonth.classList.add("is-valid");
        Expmonth.classList.remove("is-invalid");
      }
    else {
        errorExpMonth.innerHTML = "please select the month";
        Expmonth.classList.add("is-invalid");
        Expmonth.classList.remove("is-valid");
        return false;
    }
    return true;
   }

   //validate expense amount 
   function validExpAmount(){
    const errorExpAmount = document.getElementById("errorExpAmount");
    const expAmount = document.getElementById("expAmount");  
    if (parseInt(expAmount.value.trim()) >=1) {
      errorExpAmount.innerHTML = "";
      expAmount.classList.add("is-valid");
      expAmount.classList.remove("is-invalid");
    }
  else {
      errorExpAmount.innerHTML = "minimum value greater than 1";
      expAmount.classList.add("is-invalid");
      expAmount.classList.remove("is-valid");
      return false;
  }
  return true;  
   }

export {isValidTitle,validCategory,validMonth,validateTotalAmount,isBudgetExist,validExpCategory,validExpMonth,validExpAmount};