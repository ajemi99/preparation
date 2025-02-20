const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }
const get = key => sourceObject[key]
console.log(get('str'));
console['log'](get('str'))
const set = (key, value) => sourceObject[key] = value
console.log(set('nom','mounaim'));
console.log(sourceObject);



