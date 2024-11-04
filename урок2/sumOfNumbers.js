function countSubarraysWithSum(nums, target) {
    let count = 0;
    const prefixSums = new Map();
    prefixSums.set(0, 1); 
    let currentSum = 0;
    for (const num of nums) {
        currentSum += num;
        if (prefixSums.has(currentSum - target)) {
            count += prefixSums.get(currentSum - target);
        }
        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);
    }

    return count;
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
    const result = countSubarraysWithSum(arr, k); 
    console.log(result); 
});

