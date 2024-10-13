// const arr=[1,2,3,4,5,6,7,8,9,10]
// const sqArr=arr.map((e)=>{
//   return e**2
// })
// console.log(sqArr);

// const giveGrades=(score)=>{
//   return score>=90 ? "A":
//   score>=80 && score<90 ? "B":
//   score>=70 && score<80 ? "C":
//   score>=60 && score<70 ? "D":
//   score< 50? "F" : "Enter A number "
// }

// console.log(giveGrades(40));

// let car={
//   name: "Toyota",
//   model: "Camry",
//   year: 2020
// }

// function objModification(obj ,year){
//   obj.year=year
//   return obj
// }

// console.log(objModification(car,2050));

// let {model, year} = car

// console.log(model, year);

// const arr2 = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
// ];

// const primeArr = arr2.filter((e) => {
//   for (let i = 2; i < e; i++) {
//     if (e % i === 0) {
//       return false;
//     }
//   }
//   return true;
// });

// console.log(primeArr);

// const n=[1,2,3,4,5,6]
// const squareMap=n.map((e)=>e**2)
// console.log(squareMap)

// const evenNum= n.filter((e) => e%2 === 0);
// console.log(evenNum)

// const sum= n.reduce((a,curV)=>a+curV);
// console.log(sum)

// const person = {
//   name: "John Doe",
//   address: {
//     street: "123 Main St",
//     city: "Metropolis",
//     country: "USA",
//   },
//   contact: {
//     phone: "555-1234",
//     email: "john.doe@example.com",
//   },
// };
// const p=person.contact?.phone
// console.log(p);

// const personWithoutContact = {
//   name: "Jane Doe",
//   address: {
//     street: "456 Oak St",
//     city: "Gotham",
//     country: "USA"
//   }
// };

// const phoneNumberMissing = personWithoutContact.contact?.phone;
// console.log(phoneNumberMissing);


// async function fetchData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }
// fetchData();
