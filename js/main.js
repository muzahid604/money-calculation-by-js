// income function
function income() {
    const incomeInput = document.getElementById('income-input');
    const incomeMoney = parseFloat(incomeInput.value);
    if (incomeMoney > 0) {
        const balance = incomeMoney - totalExpenses();
        return balance;
    }
    else {
        const balance = 'Income some money then you have some Balance'
        return balance;
    }
}
// totalExpenses function
function totalExpenses() {
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    const clothesCost = parseFloat(clothesInput.value);
    if (foodCost > 0 && rentCost > 0 && clothesCost > 0) {
        const totalExpenses = foodCost + rentCost + clothesCost;
        return totalExpenses;
    }
    else {
        const totalExpenses = 'Please Enter Valid Input'
        return totalExpenses
    }
}
// calculation function
function calculation() {
    document.getElementById('total-expenses-span').innerText = totalExpenses();
    document.getElementById('balance').innerText = income();
    const balanceForSave = balance;
    return balanceForSave;
}
// savings function
function savings() {
    const saveInput = document.getElementById('save-input');
    const savePercent = saveInput.value;
    if (savePercent > 0) {
        const save = (income() * savePercent) / 100;
        document.getElementById('save-span').innerText = save;
        const remainingBalance = income() - save;
        document.getElementById('remainig-span').innerText = remainingBalance;
    }
    else {
        document.getElementById('remainig-span').innerText = 'please enter a valid percent';
        document.getElementById('save-span').innerText = 'You have no savings';
    }
}
// calculate button handeler
const calculateButton = document.getElementById('calculate-btn')
calculateButton.addEventListener('click', function () {
    calculation();
})
// save button handle 
const savingButton = document.getElementById('save-button');
savingButton.addEventListener('click', function () {
    savings();
})