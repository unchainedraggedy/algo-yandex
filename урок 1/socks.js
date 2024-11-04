const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
});

let inputs = [];

const processInputs = () => {
    const [a, b, c, d] = inputs.map(Number);
    let ans = [];

    if (a > 0 && c > 0) {
        ans.push([b + 1, d + 1]);
    }
    if (b > 0 && d > 0) {
        ans.push([a + 1, c + 1]);
    }
    if (a > 0 && b > 0) {
        ans.push([Math.max(a, b) + 1, 1]);
    }
    if (c > 0 && d > 0) {
        ans.push([1, Math.max(c, d) + 1]);
    }

    const m = ans.reduce((min, current) => {
        return (current[0] + current[1] < min[0] + min[1]) ? current : min;
    });

    return m;
};

rl.on('line', (input) => {
    const value = parseInt(input);
    inputs.push(value);

    if (inputs.length === 4) {
        const result = processInputs();
        console.log(result.join(' '));
        rl.close();
    }
});

rl.on('close', () => {
    process.exit(0);
});