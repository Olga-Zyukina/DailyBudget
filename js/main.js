'use strict';

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	moneyItem = document.querySelectorAll('.income-item'),
    expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

// expensesBtn.disabled = true;
// optionalExpensesBtn.disabled = true;
// countBtn.disabled = true;

startBtn.addEventListener('click', () => {

// Постоянные доходы

    let mi = 0;
    for (let i = 0; i < moneyItem.length; i++) {
		mi += +moneyItem[i].value;
        // appData.moneyI[i] = mi;
        budgetValue.textContent = mi;
        appData.budget = mi;
	}

// Возможный доход

    // incomeItem.addEventListener('input', () => {
    //     let items = incomeItem.value;
    //     console.log(1);
    //     if (isNaN(items) || items != '') {
    //         appData.income = items.split(',');
    //         incomeValue.textContent = appData.income;
    //     } 
    // });
    incomeValue.textContent = incomeItem.value;


// Обязательные расходы

    let sum1 = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum1 += +b;
        } else {
            i = i - 1;
        }
        expensesValue.textContent = sum1;
    }

// Необязательные расходы

    for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}

// Бюджет на день

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }

// Сброс переменных

    // expensesBtn.disabled = false;
    // optionalExpensesBtn.disabled = false;
    // countBtn.disabled = false;
});

// expensesBtn.addEventListener('click', () => {
//     let sum = 0;
//     for (let i = 0; i < expensesItem.length; i++) {
//         let a = expensesItem[i].value,
//             b = expensesItem[++i].value;

//         if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//             appData.expenses[a] = b;
//             sum += +b;
//         } else {
//             i = i - 1;
//         }
//         expensesValue.textContent = sum;
//     }
// });

// optionalExpensesBtn.addEventListener('click', () => {
//     for (let i = 0; i < optionalExpensesItem.length; i++) {
// 		let opt = optionalExpensesItem[i].value;
//         appData.optionalExpenses[i] = opt;
//         optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
// 	}
// });

// countBtn.addEventListener('click', () => {
//     if (appData.budget != undefined) {
//         appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
//         dayBudgetValue.textContent = appData.moneyPerDay;
//         if (appData.moneyPerDay < 100) {
//             levelValue.textContent = 'Минимальный уровень достатка';
//         } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//             levelValue.textContent = 'Средний уровень достатка';
//         } else if (appData.moneyPerDay > 2000) {
//             levelValue.textContent = 'Высокий уровень достатка';
//         } else {
//             levelValue.textContent = 'Произошла ошибка';
//         }
//     } else {
//         dayBudgetValue.textContent = 'Произошла ошибка';
//     }
// });



checkSavings.addEventListener("click", () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
    
let appData = {
    budget: {},
    // budget: money,
    // timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
    // chooseExpenses: function () {
    //     for (let i = 0; i < 2; i++) {
    //         let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
    //             b = prompt ("Во сколько обойдется?", "");
        
    //         if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        
    //             console.log ("done");
        
    //             appData.expenses[a] = b;
    //         } else {
    //             console.log ("bad result");
    //             i--;
    //         }
        
    //     }
    // },
    // detectDayBudget: function () {
    //     appData.moneyPerDay = (appData.budget / 30).toFixed();
    //     alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    // },
    // detectLevel: function () {
    //     if (appData.moneyPerDay < 100) {
    //         console.log ("Это минимальный уровень достатка!");
    //     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    //         console.log ("Это средний уровень достатка!");
    //     } else if (appData.moneyPerDay > 2000) {
    //         console.log ("Это высокий уровень достатка!");
    //     } else {
    //         console.log ("Ошибочка...!");
    //     }
    // },
    // checkSavings: function () {
    //     if (appData.savings == true) {
    //         let save = +prompt("Какова сумма накоплений?"),
    //             percent = +prompt("Под какой процент?");
    
    //             appData.monthIncome = save/100/12*percent;
    //             alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    //     }
    // },
    // chooseOptExpenses: function () {
    //     for (let i = 1; i <= 3; i++) {
    //         let questionOptExpenses = prompt("Статья необязательных расходов?");
    //         appData.optionalExpenses[i] = questionOptExpenses;
    //         console.log(appData.optionalExpenses);
    //     }
    // },
    // chooseIncome: function () {

    //     let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

    //     if (typeof(items) != "string" || items == "" || typeof(items) == null) {
    //         console.log("Вы ввели некорректные данные или не ввели их вовсе");
    //     } else {
    //         appData.income = items.split(", ");
    //         appData.income.push(prompt("Может что-то еще?"));
    //         appData.income.sort();
    //     }

    //     appData.income.forEach (function (itemmassive, i) {
    //         alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
    //     });

    // }

};

// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
// }