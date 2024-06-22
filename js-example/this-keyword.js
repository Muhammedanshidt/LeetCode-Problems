
function getName (a,b,c) {
console.log(a,b,c);
console.log(this.name);
console.log(this.age);
}

const person1 = {
    name: 'anu',
    age: 20,
    occupation: 'Software Engineer',
  
  
}
const person2 = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
  
  
}

getName.call(person1, 1 , 3, 5)


getName.apply(person1, [1 , 3, 5])


const atlasPassword = "89f7aGWx09bEsTbI"
