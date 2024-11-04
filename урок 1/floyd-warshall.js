const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
const dist = [];

rl.question('Введите количество вершин: ', (input) => {
    n = parseInt(input);
    let count = 0;

    const readMatrix = () => {
        if (count < n) {
            rl.question(`Введите расстояния для вершины ${count + 1}: `, (line) => {
                dist.push(line.split(' ').map(Number));
                count++;
                readMatrix();
            });
        } else {
            floydWarshall();
            rl.close();
        }
    };

    readMatrix();
});

const floydWarshall = () => {
    for (let via = 0; via < n; via++) {
        for (let fr = 0; fr < n; fr++) {
            for (let to = 0; to < n; to++) {
                dist[fr][to] = Math.min(dist[fr][to], dist[fr][via] + dist[via][to]);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (dist[i][i] < 0) {
            console.log(`Отрицательный цикл обнаружен в вершине: ${i}`);
        }
    }
};