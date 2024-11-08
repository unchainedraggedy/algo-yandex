function medians(arr) {
    const n = arr.length;
    arr.sort((a, b) => a - b);
    const ans = [];
    let left = Math.floor(n / 2 - 1);
    let right = Math.floor(n / 2);

    while (ans.length < n) {
        if ((n - ans.length) % 2 === 1) {
            ans.push(arr[right]);
            right++;
        } else {
            ans.push(arr[left]);
            left--;
        }
    }
    return ans;
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
    const n = Number(input[0]);
    const arr = input[1].split(' ').map(Number).slice(0, n);
    const result = medians(arr); 
    console.log(result.join(' ')); 
});
