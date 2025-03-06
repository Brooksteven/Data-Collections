// // //make a for loop 1 to 100
// //I worked on this with Anisa and Jesse

// // for (let i = 1; i < 100; i++){
// //     if (i % 3 === 0 && i % 5 === 0){
// //         console.log("Fizz Buzz")
// // } 
// // else if (i % 3 === 0){
// //     console.log("Fizz")
// // } 

// // else if(i % 5 === 0) {
// //     console.log("Buzz")
// // }
// // else {
// //     console.log(i)
// // }
// // }







// //part 2
// //worked on this as a group with Anisa and Jesse

// // for (let n = 3; n < 100; n++){
// //     if (n % 2 !== 0 && n % 3 !== 0 && n % n == 0){
// //         console.log(n) 
// //         break;
// //     }
// // }






// //part 3
// //do a method called split and then split it twice
// //part 3 I received help from Jeevitha P

// // const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// // const strRows = csvData.split("\n");
// // for (let i = 0; i < strRows.length; i++){

// //     const cell = strRows[i].split(",");
// //     console.log(cell[0], cell[1], cell[2], cell[3]);
// // }




// // part 2 of homework 308.4.1
// // received no help, but am using the information I learned from class and my classmates

// // notes:
// // declare a variable that stores the number of columns in each row of data within the csv


// //setting a string equal to a variable
// let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// // console.log(csvData)


// //here we are breaking csvData from a string into rows/arrays
// //source: mdn
// let rows = csvData.split('\n')
// // console.log(rows)

// //Declare a variable that stores the number of columns in each row of data within the CSV
// //we can do this by using the variable numColumns.
// //we can do this by getting any row [0] - [4] and then splitting the string into separate rows
// //then we can use .split() to split it by commas and we do this so we can count how many columns are in the row
// // .length counts the number of elements in the array of columns created which will be 4.
// //this will make the code dynamic and work for any number of columns
// //source: mdn, 308H.3 - Loops and Iteration
// let numColumns = rows[0].split(",").length
// // console.log(numColumns)

// //store the results in a two dimensional array
// //this empty array is going to store our processed data that runs through the loop which also means we will also need to use .push to push what we get from rowArray into this empty array.
// let twoDimArray = []


// for (let i = 0; i < rows.length; i++) {

//     //here we are splitting the array "rowArray" by getting the current row [i] and splitting it by using .split where there are ","
//     let rowArray = rows[i].split(",");

//     //here we are console logging rowArray's array after we do .split which is splitting the array where any "," are.
//     // console.log(rowArray);

//     //here we are pushing the processed data from rowArray by doing .push(rowArray) into the twoDimArray
//     twoDimArray.push(rowArray)

// }

//here we can console.log twoDimArray outside of the block scope because it was also declared outside of the blockscope.
// console.log(twoDimArray)










//Part 3: Transforming Data 

//Now we are going to transform our rows into objects

//We will do this by
/**
 * 1. for each row/array produced, create an object where the key of each value is the heading for that values column (convert these keys to all lowercase letters for consistency)
 */

//steps to solve this problem.
/**
 * thoughts: I would think maybe we can turn an array into an object by using an empty object like how we had an empty array and we can use a loop to run through what we want and then push ir into the empty object
 * 
 * googled: how to convert an array into an object and found information on geeksforgeeks.org and used this website as my source.
 */

// let row []
// const keyObj = {}

// for (let i = 0; i < twoDimArray.length; i++){
//     keyObj[i] = twoDimArray[i]
//     console.log(JSON.stringify(keyObj));
// }


 const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"


let rows = csvData.split('\n')

//now I want to change my letters to lowercase 
//on w3schhol (which is my source) it said I can do the array I want to make lowercase infront of .toLowerCase() and this will probably need to be a new array as well because this is the new array that I'm going to use for the rest of the solution
//i'll also want to push my old array which is twoDimArray into the new array after i take it through the loop and convert each index/array to lowercase by using .toLowerCase


let lowerCaseArray = []

// for (let i = 0; i < topics.length; i++){
//     lowerCaseArray.push(topics[i].toLowerCase())
//     console.log(lowerCaseArray)
// }

//so I'm seeing I cant convert an array to lowercase by using .toLowerCase, but I can do this to a string. So I am going to try to grab each row and take it through a for loop and make it lowercase and then push it to a new array which i'll keep lowerCaseArray
let lowerCaseRow = []

// for (let i = 0; i < twoDimArray.length; i++){
//     lowerCaseRow.push(twoDimArray.toLowerCase())
//     console.log(lowerCaseRow)
// }

//I realized I did the same thing and didn't get the row first. Maybe use numColumns

// for (let i = 0; i < numColumns.length; i++){
//     lowerCaseRow.push(numColumns[i].toLowerCase())
//     console.log(lowerCaseRow)
// }
//still not working so lets try rows


for (let i = 0; i < rows.length; i++){
        lowerCaseRow.push(rows[i].toLowerCase())
        
    }

    console.log(lowerCaseRow)
//I DID IT YAY!!!

let lowerCaseArraySpaced = []


for (let i = 0; i < rows.length; i++) {

    //here we are splitting the array "rowArray" by getting the current row [i] and splitting it by using .split where there are ","
    let lowerCaseRow = rows[i].split(",");

    //here we are console logging rowArray's array after we do .split which is splitting the array where any "," are.
    // console.log(rowArray);

    //here we are pushing the processed data from rowArray by doing .push(rowArray) into the twoDimArray
    lowerCaseArraySpaced.push(lowerCaseRow)

}

console.log(lowerCaseArraySpaced)

//PROBLEM now I am having an issue with getting getting the array to .split(","), but also remain lowercase. I'm going to try to do more research and come back to this.