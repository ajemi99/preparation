const more = (arg) => arg + 1
console.log(more(more(0)));
const multiply = (arg1, arg2) => arg1 * arg2
console.log(multiply(multiply(5, more(5)), multiply(2, more(9))))
const less = (arg)=> arg - 1
console.log(less(2));
const add = (arg1, arg2) => arg1 + arg2
console.log(add(2,2));
const sub = (arg1, arg2) => arg2 - arg1
console.log(sub(5,2));



