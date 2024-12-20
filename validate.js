
function isBudgetExist(id,category, month) {
    let storageData = localStorage.getItem("budgetData");
    if (!storageData) return false; 

    storageData = JSON.parse(storageData);
    if(id===0){
        return storageData.some(val => val.category === category && val.month === month);
    }else{
        return storageData.some(val =>val.id !== id && val.category === category && val.month === month);
    }
}

function isValid(id,totalAmount, category, month) {
    // Validate total Amount                                                                                               
    const errorTotalAmount = document.getElementById("errortotalAmount");

    const totalAmountInt = parseInt(totalAmount);
    if (totalAmountInt >= 1000 && totalAmountInt <= 50000) {
        errorTotalAmount.innerHTML = "";
    } else {
        errorTotalAmount.innerHTML = "Total amount must be greater than 1000 and less than 50000.";
        return false;
    }

    // validate budget
    if (isBudgetExist(id,category, month)) {
        alert("Category for the same month and year already exists.");
        return false;
    }

    return true;
}

function isValidTitle(){
    // Validate title                                                                                               
    const errorTitle = document.getElementById("errorTitle");
    const ExpTitle = document.getElementById("ExpTitle");

    const titleLength = ExpTitle.value.length;

    if (titleLength >= 10 && titleLength<= 50) {
        errorTitle.innerHTML = "";
    } else {
        errorTitle.innerHTML = "title must be greater than 10 and less than 50";
        return false;
    }
    return true;
}


// validate budget category
   function validCategory(){
    const errorCategory = document.getElementById("errorCategory");
    const category = document.getElementById("category");

    if (category.value.trim()) {
        errorCategory.innerHTML = "";
        category.classList.add("is-valid");
        category.classList.remove("is-invalid");
      }
    else {
        errorCategory.innerHTML = "please select the category";
        category.classList.add("is-invalid");
        category.classList.remove("is-valid");
        return false;
    }
    return true;
   }

// validate budget month
   function validMonth(){
    const errorMonth = document.getElementById("errorMonth");
    const month = document.getElementById("month");

    if (month.value.trim()) {
        errorMonth.innerHTML = "";
        month.classList.add("is-valid");
        month.classList.remove("is-invalid");
      }
    else {
        errorMonth.innerHTML = "please select the month";
        month.classList.add("is-invalid");
        month.classList.remove("is-valid");
        return false;
    }
    return true;
   }

//validate budget totalAmount
  function validateTotalAmount(){
    debugger
    const errorTotalAmount = document.getElementById("errortotalAmount");
    const totalAm = document.getElementById("totalAmount");

    const totalAmount = parseInt(totalAm.value);
    if (totalAmount >= 1000 && totalAmount <= 50000) {
        errorTotalAmount.innerHTML = "";
        totalAm.classList.add("is-valid");
        totalAm.classList.remove("is-invalid");
    } else {
        errorTotalAmount.innerHTML = "Total amount must be greater than 1000 and less than 50000.";
        totalAm.classList.add("is-invalid");
        totalAm.classList.remove("is-valid");
        return false;
    }
    return true;
  }

export {isValid,isValidTitle,validCategory,validMonth,validateTotalAmount};