


const cars = [[2,"manager","ceo","developer"],[2,"shri","jaav"],[2,"ceo","lead","tester","developer"]]

export default cars;

//...............................
// import animals, { useAnimals } from "./data";

// //Destructuring Arrays
// // console.log(animals);// import animals, { useAnimals } from "./data";

// //Destructuring Arrays
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound} = cat;
// // const { name: catName, sound: catSound } = cat;
// // const { name = "Fluffy", sound = "Purr" } = cat;
// // const {feedingRequirements: {food, water} } = cat;
// // console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";
// import cars from "./practice";
// window.arr2 = [];
// window.arr3 = [];
// window.arr4 = [];
// window.arr5 = [];
// window.arr10 = [];
// window.arr11 = [];
// window.sum1 = [];
// window.final = [];
// function car2(car) {
//   for (const item in car) {
//     if (item === "workflow_id") {
//       window.arr2.push(car[item]);
//     }
//     if (item === "role") {
//       window.arr4.push(car[item]);
//     }
//     if (item === "state") {
//       window.arr5.push(car[item]);
//     }
//   }
// }

// function hii() {
//   var cnt = 0;
//   var a = window.arr2[0];

//   for (var i = 0; i < window.arr2.length; i++) {
//     console.log(window.arr2[i]);
//     if (a === window.arr2[i]) {
//       cnt += 1;
//       console.log("hii");
//       a = window.arr2[i];
//       continue;
//     } else {
//       window.arr3.push(cnt);
//       cnt = 1;
//       a = window.arr2[i];
//     }
//   }
//   window.arr3.push(cnt);
//   var k = -1;
//   var su = 0;
//   console.log(window.arr3);
//   for (var i = 0; i < window.arr3.length; i++) {
//     var z = window.arr3[i];
//     for (var j = 0; j < z; j++) {
//       k += 1;
//       if (window.arr5[k] === 1) {
//         su = j;
//       }
//       window.arr10.push(window.arr4[k]);
//     }
//     window.sum1.push(su);
//     window.arr11.push(window.arr10);
//     window.arr10 = [];
//     su = 0;
//     console.log("hello");
//   }
//   var leng = window.arr11.length;
//   var j = -1;
//   for (var i = 0; i < leng; i++) {
//     j += 1;

//     window.arr11[i].splice(0, 0, window.sum1[j]);
//     // i += window.arr3[j];
//   }

//   console.log(window.arr2);
//   console.log(window.arr3);
//   console.log(window.arr4);
//   console.log(window.arr5);
//   console.log(window.arr11);
//   console.log(window.sum1);
// }
// ReactDOM.render(
//   <div>
//     {cars.map(car2)}
//     {hii()}
//   </div>,
//   document.getElementById("root")
// );
//..............................
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound} = cat;
// // const { name: catName, sound: catSound } = cat;
// // const { name = "Fluffy", sound = "Purr" } = cat;
// // const {feedingRequirements: {food, water} } = cat;
// // console.log(food);


 
