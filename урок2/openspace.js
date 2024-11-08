const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (n) => {
    rl.question('', (input) => {
        const arr = input.split(' ').map(Number);
        
        const prefSums = new Array(Number(n) + 1).fill(0);
        for (let i = 1; i <= n; i++) {
            prefSums[i] = prefSums[i - 1] + arr[i - 1];
        }

        const suffSums = new Array(Number(n) + 1).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            suffSums[i] = suffSums[i + 1] + arr[i];
        }

        let ans = 0;
        for (let i = 1; i < n; i++) {
            ans += arr[i] * i;
        }

        let nowSum = ans;
        for (let nowPos = 1; nowPos < n; nowPos++) {
            nowSum += prefSums[nowPos] - suffSums[nowPos];
            ans = Math.min(ans, nowSum);
        }

        console.log(ans);
        rl.close();
    });
});
