"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;


/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
buttonSubmit.addEventListener('click', payFine);
function payFine() {
    if (!/^\d{3}$/.test(fineNumber.value)) {
        alert("Некоректний номер!")
        return
    }
    if (!/^[А-ЯЇІЄҐ]{2}\d{6}$/.test(passport.value)) {
        alert("Не вірний паспортний номер!")
        return
    }
    if (!/^\d{16}$/.test(creditCardNumber.value)) {
        alert("Не вірна кредитна картка!")
        return
    }
    if (!/^\d{3}$/.test(cvv.value)) {
        alert("Не вірний cvv!")
        return
    }
    if (!/^\d+(\.\d{1,2})?$/.test(amount.value)) {
        alert("Некоректна сума!")
        return
    }

    let trueFineIndex

    for (let i in DB) {
        if (DB[i]['номер'] === fineNumber.value) {
            trueFineIndex = i
            break
        }
    }

    if (trueFineIndex === undefined) {
        alert("Номер не співпадає!")
        return
    }

    if (amount.value != DB[trueFineIndex]['сума']) {
        alert("Сума не співпадає!")
        return
    }

    DB.splice(trueFineIndex, 1)
    alert("Штраф сплачено!")

    fineNumber.value = ""
    passport.value = ""
    creditCardNumber.value = ""
    cvv.value = ""
    amount.value = ""
}
