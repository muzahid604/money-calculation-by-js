
function balance() {
    const incomeInput = document.getElementById('income-input');
    const incomeMoney = parseFloat(incomeInput.value);
    const balance = incomeMoney - totalExpenses();
    return balance;
}
function totalExpenses() {
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    const clothesCost = parseFloat(clothesInput.value);
    const totalExpenses = foodCost + rentCost + clothesCost;
    return totalExpenses;
}

function calculation() {
    document.getElementById('total-expenses-span').innerText = totalExpenses();
    document.getElementById('balance').innerText = balance();
    const balanceForSave = balance;
    return balanceForSave;
}
function savings() {
    const saveInput = document.getElementById('save-input');
    const savePercent = saveInput.value;
    const save = (balance() * savePercent) / 100;
    document.getElementById('save-span').innerText = save;
    const remainingBalance = balance() - save;
    document.getElementById('remainig-span').innerText = remainingBalance;
}
const calculateButton = document.getElementById('calculate-btn')
calculateButton.addEventListener('click', function () {
    calculation();
})
const savingButton = document.getElementById('save-button');
savingButton.addEventListener('click', function () {
    calculation();
    savings();
})