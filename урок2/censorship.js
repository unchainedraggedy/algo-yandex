const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (firstLine) => {
    const [n, c] = firstLine.split(' ').map(Number);
    rl.question('', (secondLine) => {
        const s = secondLine;
        let cnt_a = 0;
        let cnt_b = 0;
        let badness = 0;
        let ans = 0;
        let right = 0;

        for (let left = 0; left < n; left++) {
            while (right < n && badness <= c) {
                if (s[right] === 'a') {
                    cnt_a += 1;
                }
                if (s[right] === 'b') {
                    cnt_b += 1;
                    badness += cnt_a
                }
                if (badness > c) {
                    ans = Math.max(ans, right - left);
                } else {
                    ans = Math.max(ans, right - left + 1);
                }
                right++;
            }
            if (s[left] === 'a') {
                cnt_a -= 1;
                badness -= cnt_b;
            }
            if (s[left] === 'b') {
                cnt_b -= 1;
            }
        }
        console.log(ans);
        rl.close();
    });
});
 