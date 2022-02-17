const calculateButton = document.getElementById('calculate-btn')
calculateButton.addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeMoney = parseFloat(incomeInput.value);
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    const clothesCost = parseFloat(clothesInput.value);
    const totalExpenses = foodCost + rentCost + clothesCost;
    const remainingBalance = incomeMoney - totalExpenses;
    document.getElementById('total-expenses-span').innerText = totalExpenses;
    document.getElementById('balance').innerText = remainingBalance;
})
const savingButton = document.getElementById('save-button');
savingButton.addEventListener('click', function () {

})