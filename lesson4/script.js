'use strict';

let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
};
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
        
            if(typeof(a) == 'string' && typeof(a) != null && typeof(b) != null
                && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка.");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            console.log("Средний уровень достатка.");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка.");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    checkSavings: function() {
        if (appData.saving) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseExpenses: function() {
        for (let i = 0; i < 3; i++){
            let a=prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i+1] = a;
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        console.log(typeof(items));
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может еще?", ""));
            appData.income.sort();
        };

        appData.income.forEach(function(items, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + items);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

