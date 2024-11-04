const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
});

let coordinates = [];

const processCoordinates = () => {
    const [x1, y1, x2, y2, x, y] = coordinates.map(Number);
    let result = '';

    if (y < y1) {
        if (x < x1) {
            result = 'SW';
        } else if (x > x2) {
            result = 'SE';
        } else {
            result = 'S';
        }
    } else if (y > y2) {
        if (x < x1) {
            result = 'NW';
        } else if (x > x2) {
            result = 'NE';
        } else {
            result = 'N';
        }
    } else {
        if (x < x1) {
            result = 'W';
        } else if (x > x2) {
            result = 'E';
        }
    }

    return result;
};

rl.on('line', (input) => {
    const values = input.split(' ').map(Number);
    coordinates.push(...values);

    if (coordinates.length === 6) {
        const result = processCoordinates();
        console.log(result);
        rl.close(); 
    }
});

rl.on('close', () => {
    process.exit(0);
});