const first = arr => arr[0]
console.log(first('mounaim'));
const last = arg => arg[arg.length-1]
console.log(last(['hello','1999']));
const kiss = arr => [last(arr), first(arr)]
console.log(kiss(['hello','1999', 25]));



