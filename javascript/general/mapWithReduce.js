// Map function by using reduce

const students = [{ name: "Leon", age: 27 }, { name: "Jiwon", age: 25 }];

const names = students.reduce((a, x) => {
  a.push(x.name);
  return a;
}, []);

console.log(names);

// Map function

const namesWithMap = students.map(person => person.name);

console.log(namesWithMap);
