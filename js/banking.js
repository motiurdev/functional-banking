function inputField(fieldId) {
    const inputField = document.getElementById(fieldId)
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText)
    // clear the input field
    inputField.value = ''
    return inputValue;
}

function updateAmount(AmountId, amount) {
    const totalBalance = document.getElementById(AmountId)
    const totalText = totalBalance.innerText;
    const totalAmount = parseFloat(totalText)
    totalBalance.innerText = totalAmount + amount

}

function getCurrentBalance() {
    const totalAmount = document.getElementById("balance-total")
    const balanceText = totalAmount.innerText;
    const totalBalance = parseFloat(balanceText)
    return totalBalance;
}

function updateBalance(balanceId, amountField, isTrue) {
    const balanceTotal = document.getElementById(balanceId)
    // const balanceText = balanceTotal.innerText;
    // const balanceAmount = parseFloat(balanceText)
    const balanceAmount = getCurrentBalance()
    if (isTrue == true) {
        balanceTotal.innerText = balanceAmount + amountField;
    } else {
        balanceTotal.innerText = balanceAmount - amountField;
    }
}

document.getElementById("deposit-button").addEventListener("click", function () {
    // get the deposit input field value
    const depositInput = inputField("deposit-input")
    if (depositInput > 0) {
        // update deposit total
        updateAmount("deposit-total", depositInput)
        // update Balance 
        updateBalance("balance-total", depositInput, true)
    } else {
        alert("Enter positive number")
    }

})

document.getElementById("withdraw-button").addEventListener("click", function () {
    // withdrew input field
    const withdrawInput = inputField("withdraw-input")
    const currentBalance = getCurrentBalance()
    if (withdrawInput > 0) {
        // update withdraw total
        updateAmount("withdraw-total", withdrawInput)
        // update balance Total
        updateBalance("balance-total", withdrawInput, false)
    } else {
        alert("Enter positive number")
    }

    if (withdrawInput > currentBalance) {
        alert("You can not withdraw more than your balance")
    }

})