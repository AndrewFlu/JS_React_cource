'use strict'

const numbers = [1, 5, 7, 10, 12, 15];
const strings = ["one", "two", "three"];

function printArrayByForEach(array) {
    console.log("Printing array by foreach()...");
    array.forEach(function (value, index, array) {
        console.log(`${index}: ${value} внутри массива ${array}`)
    })
}

function printArrayByForOff(array) {
    console.log("Printing array by for off()");
    for (let key of array) {
        console.log(key)
    }
}

printArrayByForEach(numbers);
printArrayByForEach(strings);

printArrayByForOff(numbers);
printArrayByForOff(strings);