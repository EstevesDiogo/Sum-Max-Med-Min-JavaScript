const arr1 = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 5, 6, 7, 8, 9, 0, 6, 5, 4, 6, 8, 0, 3, 2, 4, 6, 8, 9, 5, 43, 2, 2, 5, 7, 9567, 4, 434, 23, 647];

// MED =====================
function med(arr) {
    let sum = 0;
    let med;
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        sum += arr[i];
        med = sum / arr.length;
    }
    return med;
}

med(arr1);