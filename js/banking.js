function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    input.value = '';
    return inputValue;
}
function updateValue(fieldId, inputValue) {
    const deposit = document.getElementById(fieldId);
    const depositText = deposit.innerText;
    const previousDepositValue = parseFloat(depositText);
    const newValue = previousDepositValue + inputValue;
    deposit.innerText = newValue;
}
function getInnerText(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldTagText = fieldTag.innerText;
    const value = parseFloat(fieldTagText);
    return value;
}
function updateBalance(inputValue, isAdding) {
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    let newTotalBalance;
    if (isAdding == true) {
        newTotalBalance = previousTotalBalance + inputValue;
    }
    else {
        newTotalBalance = previousTotalBalance - inputValue;
    }
    totalBalance.innerText = newTotalBalance;
}

document.getElementById("deposit-button").addEventListener('click', function () {
    const inputValue = getInput('deposit-input');
    if (inputValue > 0) {
        updateValue('deposit-total', inputValue);
        updateBalance(inputValue, true);
    }
});
document.getElementById("withdraw-button").addEventListener('click', function () {
    const inputValue = getInput('withdraw-input');
    const balance = getInnerText('balance-total');
    if (inputValue > 0 && balance >= inputValue) {
        updateValue('withdraw-total', inputValue);
        updateBalance(inputValue, false);
    }
});
