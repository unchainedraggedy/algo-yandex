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

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
readline.on('line', (line) => {
    input.push(line);
    if (input.length === 2) {
        readline.close();
    }
}).on('close', () => {
    const [n, k] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number).slice(0, n);
    const result = counting(arr, k); 
    console.log(result); 
});
