const arr1 = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 5, 6, 7, 8, 9, 0, 6, 5, 4, 6, 8, 0, 3, 2, 4, 6, 8, 9, 5, 43, 2, 2, 5, 7, 9567, 4, 434, 23, 647];
//let max = arr[0];
//for (let i = 0; i < arr.length; i++) {
//console.log(arr[i]);
//    if (arr[i] > max) {
//       max = arr[i];
//    }
//console.log(max);
//}
//console.log(max);
function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        if (arr[i] > max) {
            max = arr[i];
        }
        //console.log(max);
    }
    //console.log(max);
    return max
}

max(arr1);