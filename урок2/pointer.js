function counting(arr, k){
    let counter = 0;
    let last = 0;
    for(let first = 0; first < arr.length; first++){
        while(last < arr.length && arr[last] - arr[first] <= k){
            last++;
        }
        counter += arr.length - last;
    }
    return counter;
}

console.log(counting([1, 3, 11, 14, 17, 21, 34, 50], 10))

