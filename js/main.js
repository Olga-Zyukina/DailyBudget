"use strict";

let startBtn = document.getElementById("start"),

  moneyItem = document.querySelectorAll(".income-item"),
  incomeItem = document.querySelector(".choose-income"),
  expensesItem = document.querySelectorAll(".expenses-item"),
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

  checkSavings = document.querySelector("#savings"),
  sumValue = document.querySelector(".choose-sum"),
  percentValue = document.querySelector(".choose-percent"),

  budgetValue = document.querySelector(".budget-value"),
  expensesValue = document.querySelector(".expenses-value"),
  dayBudgetValue = document.querySelector(".daybudget-value"),
  levelValue = document.querySelector(".level-value"),
  incomeValue = document.querySelector(".income-value"),
  optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
  monthSavingsValue = document.querySelector(".monthsavings-value"),
  yearSavingsValue = document.querySelector(".yearsavings-value");

startBtn.addEventListener("click", () => {
  
   // Постоянные доходы
  let sumMoney = 0;
  for (let i = 0; i < moneyItem.length; i++) {
    sumMoney += +moneyItem[i].value;
    budgetValue.textContent = sumMoney;
  }

  // Возможный доход
  incomeValue.textContent = incomeItem.value;

  // Обязательные расходы
  let sumExpenses = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    sumExpenses += +expensesItem[i].value;
    expensesValue.textContent = sumExpenses;
  }

  // Необязательные расходы
  let sumOpt = 0;
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    sumOpt += +optionalExpensesItem[i].value;
    optionalExpensesValue.textContent = sumOpt;
  }

  // Бюджет на день
  if (budgetValue.textContent != undefined) {
    dayBudgetValue.textContent = ((+budgetValue.textContent - +expensesValue.textContent) / 30).toFixed();
    if (dayBudgetValue.textContent <= 3000) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (dayBudgetValue.textContent > 3000 && dayBudgetValue.textContent < 10000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (dayBudgetValue.textContent >= 10000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Произошла ошибка";
  }
});

// Доход по вкладам
checkSavings.addEventListener("click", () => {
  if (appData.savings == true) {
    appData = {}
    monthSavingsValue.textContent = 0;
    yearSavingsValue.textContent = 0;
    sumValue.value = '';
    percentValue.value = '';
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener("input", () => {
  if (appData.savings == true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener("input", () => {
  if (appData.savings == true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {};