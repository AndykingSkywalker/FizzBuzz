/*
This is an example of the commonly used Fizz Buzz (AKA Foo Bar) scenario.

My objective is to print the numbers from 1 - 100 and for every number that is a multiple of 2 it will print "Fizz" and for every multiple of 5 it will print "Buzz".

For any numbers that are multiples of 2 and 5 it will print "FizzBuzz".

*/

for (let i = 1; i < 101; i++){
    if (i % 2 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 2 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}

// There are alternate ways to achieve this goal however in terms of readability this would be a preffered method.