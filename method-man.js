const words = str => str.split(' ')
const sentence = arr => arr.join(' ')
const yell = str => str.toUpperCase()
const whisper = str => "*"+str.toLowerCase()+"*"
const capitalize = str => str[0].toUpperCase()+ str.slice(1,str.length).toLowerCase()
console.log(capitalize("hELLO mOUNAIM"));

