//Generate Random Whole Numbers with JS

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
} 

/**********/


//Generate Random Whole Number within a Range

/*Create a function called randomRange that takes a range myMin and myMax and 
returns a random whole number that's greater than or equal to myMin and less than
or equal to myMax. */

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}