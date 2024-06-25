
// function getName (a,b,c) {
// console.log(a,b,c);
// console.log(this.name);
// console.log(this.age);
// }

// const person1 = {
//     name: 'anu',
//     age: 20,
//     occupation: 'Software Engineer',
  
  
// }
// const person2 = {
//     name: 'John Doe',
//     age: 30,
//     occupation: 'Software Engineer',
  
  
// }

// getName( 1 , 3, 5)


// getName.apply(person1, [1 , 3, 5])


// const atlasPassword = "89f7aGWx09bEsTbI"


// fetch('https://fakestoreapi.com/products/1')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     // Process the data
//   })
//   .catch(error => {
//     console.error('There was a problem with your fetch operation:', error);
//   });

  fetch('https://fakestoreapi.com/products/1')
  .then(res =>res.json())
  .then(data => console.log(data)).catch(err => console.log(err))

