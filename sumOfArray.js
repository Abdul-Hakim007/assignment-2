const array = [1,2,3,4,5,6];
let sum = 0;

function arrayTotal (array){
    for(let i=0;i<array.length;i++){
        sum += array[i];
    }
    console.log(sum);

}
arrayTotal(array);

