const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    console.log(`your answer ${input}`); 
    rl.close(); 
});
