// Given an array of strings, use a function to reverse all the elements in the 
// string in ascending order and the specific elements in descending order
function reverseString(str){
    str = str.map(str => str.split('').reverse().join);
    str.reverse();
    }
   let string = ["Terry", "Chozi", "Gracey", "Fancy"];
   reverseString(string)
   console.log(string)
   // Given an array of objects, each object representing a person with a 
   // name and age property, write a function that returns the sum of all
   //  people who are less than 18 years.
   const people = [
     { name: 'Alice', age: 17 },
     { name: 'Eunice', age: 22 },
     { name: 'Charlie', age: 14 },
     { name: 'Max', age: 19 },
   ];
   function sumAges(people){
       let sum = 0
       for (let i = 0; i<people.length;i++){
           if(people[i].age <18){
               sum += people[i].age;
           }
       }
       return sum
   
   }
   console.log(sumAges(people))
   
   // Using JS functions and an array of numbers, return positive if an element
   //  within the array is positive, negative if an element is negative, else zero
   function findPositiveOrNegative(nums){
    for (const num of nums) {
        if (num >0) {
            return "positive"
        }
        else if (num < 0) {
            return "negative"
        }
        else{
            return "zero"
        }
    }
}
let nums = [1,7,19,23,56]
console.log(findPositiveOrNegative(nums));
   
 // Given an array of objects, where each object represents an employee with an id, name, and salary property, 
 // write a function that returns a new array of employee objects sorted by their salary in ascending order.
 function sortAscending(employee){
    return sortEmployee = employee.sort((empl1, empl2) => empl1.salary - empl2.salary)
 }
 let employee = [
    {id:12816970, name:'Terry', salary:20000},
    {id:1281600, name:'Soyian', salary:80000},
    {id:128880, name:'Fancy', salary:90000},

 ];
 console.log(sortAscending(employee))
