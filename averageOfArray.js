const Array = [5, 6, 7, 8, 9];
let sum = 0;


function average(Array) {
    for (let i = 0; i < Array.length; i++) {
        let currentNumber = Array[i];
        sum += currentNumber;
    }
    avrg = sum / Array.length;
    return avrg;

}

console.log(average(Array));