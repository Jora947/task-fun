/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export function higherThan(num) {
    let result = [];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > num) {
            result.push(arguments[i]);
        }
    }
    return result;
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
    let total = [];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].includes(substr) === true) {
            total.push(arguments[i]);
        }
    }
    return total;
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
    return arguments * num;
}
