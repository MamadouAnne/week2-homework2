//while loop, print out all prime numbers between 0 - 20


// looping from 0 to 20

// for (let i = 0; i <= 20; i++) {
//   let flag = 0;
//
//   // looping through 2 to user input number
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       flag = 1;
//       break;
//     }
//   }
//
//   // if number greater than 1 and not divisible by other numbers
//   if (i > 1 && flag == 0) {
//     console.log(i);
//   }
// }

// var prime = false;
// let num = 1;
// while (num <= 20) {
//   let pCount = 2;
//   while (pCount < num) {
//     if (num % pCount == 0) {
//       prime = false;
//       break;
//     } else {
//       prime = true;
//     }
//     pCount++;
//   }
//   if (prime == true) {
//     console.log(num + " is prime");
//   }
//   num++;
// }

let num = 1;
while (num <= 20) {
  let pCount = 2;
  let flag = 0;
  while (pCount < num) {
    if (num % pCount == 0) {
      flag = 1;
      break;
    }
    pCount++;
  }
  if (num > 1 && flag == 0) {
    console.log(num + " is prime");
  }
  num++;
}

//2. Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end

// let i = 1;
//
// let sum = 0;
// while (i <= 20) {
//   console.log(i, sum);
//   i++;
//   sum += i;
// }

// 3. Use a while loop to print out the even number from 1 to 20. (You'll need Modulus for this. And an IF Statement.)

// let i = 1 ;
//
// let count = 0;
// while (i <= 20 ){
//
//   if (i%2 === 0 && i%i === 0)
//   console.log(i);
//   i++;
//   count++;
// var dollar = 1;
// var price = 4;
//
// var payment = 10;
//
// var change = payment - price;
//
//
//
// var quarters = 1/4 * change;
//
// change =
//
// while (change <= 6){
//   console.log(quarter);
// }

// var addThis=0;
// var sum=0;
//
// while ( addThis <= 10 ){
//   sum += addThis;
//   addThis++;
//   console.log (sum, addThis);
// }


// const num = 150;
// let final = 100;
// // ADD CODE HERE
// if (num > 100) {
//   (final = null)
//   console.log(final);
// } else {
//   (final = num * 2)
//   console.log(final);
// }



// const fb = [];
// // ADD CODE HERE
//
// for (let i= 1; i <17; i++){
// if (i%3 == 0 && i%5 == 0){
//   	fb.push("fizzbuzz");
// }
//   else if (i%3 == 0){
//     fb.push("fizz");
// }
// else  if (i%5 == 0){
//     fb.push("buzz");
//  }
// else {
//    fb.push(i);
// }
// }
// console.log(fb);
