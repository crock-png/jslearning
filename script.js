'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let questionFirst = prompt("Введите обязательную статью расходов в этом месяце", "");
let questionSecond = prompt("Во сколько обойдется?", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        questionFirst : questionSecond
    },
    optionalExpenses: "",
    income: {},
    saving: false
};

alert(money / 30);