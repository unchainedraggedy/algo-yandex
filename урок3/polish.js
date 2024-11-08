function evaluatePostfix(expression) {
    const tokens = expression.trim().split(/\s+/);
    const stack = [];
  
    tokens.forEach((token) => {
      if (!Number.isNaN(Number(token))) {
        stack.push(Number(token));
      } else {
        const b = stack.pop();
        const a = stack.pop();
        let result;
  
        switch (token) {
          case '+':
            result = a + b;
            break;
          case '-':
            result = a - b;
            break;
          case '*':
            result = a * b;
            break;
          default:
            throw new Error('Неизвестный оператор');
        }
  
        stack.push(result);
      }
    });
  
    return stack.pop();
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.on('line', (line) => {
    const expression = line.trim();
    if (expression) {
      const result = evaluatePostfix(expression);
      console.log(result);
    }
    readline.close();
  });
  