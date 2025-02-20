const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
  const clone1 = {...person}
  const clone2 = clone1
  const samePerson = person
  person.age = 78
  person['country'] = 'FR'
  console.log(clone1);
  console.log(clone2);
  console.log(samePerson);
  
  