"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */

    // Перевірка чи введено значення для пошуку
    if (!searchKey) {
        console.error("Потрібно ввести значення для пошуку.");
        return [];
    }
    // Фільтруємо дані відповідно до введеного searchKey
    const filteredFines = DB.filter(function (fine) {
        return (
            fine.номер.includes(searchKey) ||
            fine.тип.toLowerCase().includes(searchKey.toLowerCase())
        );
    });
    return filteredFines;
}

