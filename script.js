// script.js

// Variables and Data
let income = 0;
let expenses = [];
let balance = 0;

// Functions
function addIncome(amount) {
  income += amount;
  updateBalance();
}

function addExpense(description, amount) {
  expenses.push({ description, amount });
  updateBalance();
}

function updateBalance() {
  balance = income - expenses.reduce((total, expense) => total + expense.amount, 0);
  document.getElementById("balance").textContent = `Balance: $${balance}`;
}

function renderExpenses() {
  const expenseList = document.getElementById("expenses");
  expenseList.innerHTML = "";
  expenses.forEach((expense) => {
    const expenseItem = document.createElement("li");
    expenseItem.textContent = `${expense.description}: $${expense.amount}`;
    expenseList.appendChild(expenseItem);
  });
}

// Event Listeners
document.getElementById("add-income").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("income-amount").value);
  addIncome(amount);
});

document.getElementById("add-expense").addEventListener("click", () => {
  const description = document.getElementById("expense-description").value;
  const amount = parseFloat(document.getElementById("expense-amount").value);
  addExpense(description, amount);
  renderExpenses();
});

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  updateBalance();
  renderExpenses();
});
