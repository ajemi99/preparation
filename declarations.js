const escapeStr = '`\'"\\/'
console.log(escapeStr);
const arr = [4,'2']
console.log(arr);
const obj = {
    str : "mounaim",
    num : 25,
    bool : true ,
    undef : undefined
}
const nested = {
    arr : [4, undefined, '2'],
    obj : {
        str : 'jemi',
        num : 1999,
        bool : false
    }
}
Object.freeze(nested)
nested.arr = [50]
Object.freeze(nested.obj)
nested.obj.str  = 'hello'
console.log(nested.obj);




