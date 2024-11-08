function holidaySort(arr, k){
    arr.sort((a, b) => a - b);
    let ans = 0;
    let left = 0, right = 0;
    let n = arr.length;

    while (left < n && right < n) {
    if (arr[right] - arr[left] <= k) {
        ans = Math.max(ans, right - left + 1);
        right++;
    } else {
        left++;
    }
}

return ans

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
    const result = holidaySort(arr, k); 
    console.log(result); 
});
