function compress(lst) {
    let ans = [lst[0]];
    
    for (let now of lst.slice(1)) {
        if (now !== ans[ans.length - 1]) {
            ans.push(now);
        }
    }

    if (ans.length > 1 && new Set(ans[0]).size === 1 && ans[0][0] === '.') {
        ans.shift();
    }

    if (ans.length > 1 && new Set(ans[ans.length - 1]).size === 1 && ans[ans.length - 1][0] === '.') {
        ans.pop();
    }

    return ans;
}

function invert(lst) {
    let ans = [];

    for (let i = 0; i < lst[0].length; i++) {
        ans.push([]);
    }

    for (let now of lst) {
        for (let i = 0; i < now.length; i++) {
            ans[i].push(now[i]);
        }
    }

    for (let i = 0; i < ans.length; i++) {
        ans[i] = ans[i].join('');
    }

    return ans;
}

function identifyCharacter(n, lines) {
    let a = lines;
    a = compress(a);
    a = invert(a);
    a = compress(a);
    a = invert(a);

    if (a.length === 1 && a[0] === '#') {
        return 'I';
    } else if (JSON.stringify(a) === JSON.stringify(['###', '#.#', '###'])) {
        return 'O';
    } else if (JSON.stringify(a) === JSON.stringify(['##', '#.', '##'])) {
        return 'C';
    } else if (JSON.stringify(a) === JSON.stringify(['#.', '##'])) {
        return 'L';
    } else if (JSON.stringify(a) === JSON.stringify(['#.#', '###', '#.#'])) {
        return 'H';
    } else if (JSON.stringify(a) === JSON.stringify(['###', '#.#', '###', '#..'])) {
        return 'P';
    } else {
        return 'X';
    }
}

// Input handling
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let a = [];

rl.question('', (input) => {
    n = parseInt(input);
    
    let count = 0;
    rl.on('line', (line) => {
        a.push(line);
        count++;
        
        if (count === n) {
            rl.close();
        }
    });
});

rl.on('close', () => {
    const result = identifyCharacter(n, a);
    console.log(result);  
});