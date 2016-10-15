/**
 * Created by siqi on 9/24/16.
 */

//Given this empty array, perform the following tasks
var arr1 = [];

//Task 1: populate the empty array with 10 random, *rounded*, numbers between 0 and 100
//Hint: within a 'for' loop, use 'Math.random() * 100' and 'Math.round()'


for(var i=0; i<10; i++){
  var randNum = Math.round(Math.random() * 100);
  arr1.unshift(randNum)

};
console.log(arr1);
//Task 2: remove the first element in the array and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

arr1.shift();
console.log(arr1);



//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

arr1.pop();
console.log(arr1);


//Question: how many elements does arr1 have at this moment?

//8 elements!

//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?
var arr2 = [];

var unshifted = arr1[0];

for(var i=0; i<10; i++){
  var unshifted =
};


//Task 5 OPTIONAL: filter out all the odd values in arr1, keeping the even values
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var arr3 = arr1.filter(function(el){
    //your code here
});
console.log(arr3);
