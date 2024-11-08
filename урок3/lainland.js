function findCity(n, prices) {
    const result = Array(n).fill(-1);
    const stack = [];
  
    for (let i = 0; i < n; i += 1) {
      while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
        const j = stack.pop();
        result[j] = i;
      }
      stack.push(i);
    }
  
    return result;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const input = [];
  readline.on('line', (line) => {
    input.push(line);
    if (input.length === 2) {
      readline.close();
    }
  }).on('close', () => {
    const n = parseInt(input[0], 10);
    const arr = input[1].split(' ').map(Number).slice(0, n);
    const result = findCity(n, arr).join(' ');
    console.log(result);
  });
  