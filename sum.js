const arr1 = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 5, 6, 7, 8, 9, 0, 6, 5, 4, 6, 8, 0, 3, 2, 4, 6, 8, 9, 5, 43, 2, 2, 5, 7, 9567, 4, 434, 23, 647];

// SUM =====================
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        sum += arr[i];

        //console.log(sum)
    }
    return sum;
}

sum(arr1);

// SUM WITH FOREACH ========
function sumArray(arr) {
    let sum = 0;
    arr.forEach(function (element) {
        sum += element;
    });
    return sum;
}

sumArray(arr1);
