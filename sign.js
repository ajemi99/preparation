const sign = num => {
    if(num > 0) return 1
    if (num < 0) return -1
    else return 0
}
const sameSign = (num1, num2) => 
    sign(num1)===sign(num2) ? true : false

console.log(sameSign(-20, 40));
