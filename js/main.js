"use strict";

let startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  moneyItem = document.querySelectorAll(".income-item"),
  expensesItem = document.getElementsByClassName("expenses-item"),
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  incomeItem = document.querySelector(".choose-income"),
  checkSavings = document.querySelector("#savings"),
  sumValue = document.querySelector(".choose-sum"),
  percentValue = document.querySelector(".choose-percent");

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
    if (dayBudgetValue.textContent <= 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (dayBudgetValue.textContent > 100 && dayBudgetValue < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (dayBudgetValue.textContent >= 2000) {
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
    appData.savings = false;
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