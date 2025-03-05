// //make a for loop 1 to 100
// for (let i = 1; i < 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("Fizz Buzz")
// } 
// else if (i % 3 === 0){
//     console.log("Fizz")
// } 

// else if(i % 5 === 0) {
//     console.log("Buzz")
// }
// else {
//     console.log(i)
// }
// }







//part 2
//worked on this as a group with Anisa and Jesse

// for (let n = 3; n < 100; n++){
//     if (n % 2 !== 0 && n % 3 !== 0 && n % n == 0){
//         console.log(n) 
//         break;
//     }
// }






//part 3
//do a method called split and then split it twice
//part 3 I received help from Jeevitha P

// const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// const strRows = csvData.split("\n");
// for (let i = 0; i < strRows.length; i++){

//     const cell = strRows[i].split(",");
//     console.log(cell[0], cell[1], cell[2], cell[3]);
// }




// part 2 of homework 308.4.1
// received no help, but am using the information I learned from class and my classmates

// notes:
// declare a variable that stores the number of columns in each row of data within the csv
// this will be let numColumn = rows

//setting a string equal to a variable
let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
console.log(csvData)


//here we are breaking csvData from a string into rows/arrays
//source: mdn
let rows = csvData.split('\n')
console.log(rows)

//Declare a variable that stores the number of columns in each row of data within the CSV
//we can do this by using the variable numColumns.
//we can do this by getting any row [0] - [4] and then splitting the string into separate rows
//then we can use .split() to split it by commas and we do this so we can count how many columns are in the row
// .length counts the number of elements in the array of columns created which will be 4.
//this will make the code dynamic and work for any number of columns
//source: mdn, 308H.3 - Loops and Iteration
let numColumns = rows[0].split(",").length
console.log(numColumns)

//store the results in a two dimensional array



for (let i = 0; i < rows.length; i++) {
    let rowArray = rows[i].split(",");
    console.log(rowArray);
}


// Additional explanation of what she’s covering now.

//I have a “watch list” a “Newly added” and an “action movie” list.

//Instead of creating new instances for the movie “The matrix” and creating multiple copies. I would reference the movie and have it sitting in just one location. The movie will appear on all of those lists but this doesn’t mean I have 3 copies of “the matrix” in my list. Just one.

//The original movie remains on the list. It was added to the “action movies” list, from there I clicked a button and it was added to my “watch list” from the “action movies” list.


//If helps anyone, primitive data types have a explicit value, nonprimitives(obj arrays) have a value that is an address that points to a value that is held in memory
//So copying non-prim values will just copy their address

//Additional explanation of what’s happening.
//Netflix has a list of movies.
//If you want to grab a movie object out of an array of movies and add it to a “watch list” this would be an example of a passby function.
//The value of the movie is unchanged, but for a moment an action sends that movie to another array. “Watchlist”.

//Movie is still just a part of the database of movies and its now also on a list of movies to watch.