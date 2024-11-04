function prefixsum(arr) {
    const prefixsum = new Array(arr.length);
    prefixsum[0] = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        prefixsum[i] = prefixsum[i - 1] + arr[i]; 
    }
    return prefixsum;
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
    const number = input[0];
    const arr = input[1].split(' ').map(Number).slice(0, number);
    const result = prefixsum(arr); 
    console.log(result.join(' ')); 
});
