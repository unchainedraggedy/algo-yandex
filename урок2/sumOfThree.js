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
    const n = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number);
    const result = calculateResult(n, arr);
    console.log(result);
});

function calculateResult(n, arr) {
    const mod = 10**9 + 7;
    const prefSums = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefSums[i] = (arr[i - 1] + prefSums[i - 1]) % mod;
    }

    const suffSums = Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        suffSums[i] = (suffSums[i + 1] + arr[i]) % mod;
    }

    let ans = 0;
    for (let nowPos = 1; nowPos < n - 1; nowPos++) {
        ans = (ans + prefSums[nowPos] * arr[nowPos] * suffSums[nowPos + 1]) % mod;
    }

    return ans;
}
