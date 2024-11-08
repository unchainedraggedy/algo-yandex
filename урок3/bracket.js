function isValidParentheses(s) {
    const stack = [];
    for (let i = 0; i < s.length; i += 1) {
      const char = s[i];
  
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (!stack.length) {
          return false;
        }
        const top = stack.pop();
        if (
          (char === ')' && top !== '(')
              || (char === '}' && top !== '{')
              || (char === ']' && top !== '[')
        ) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question('', (line) => {
    const result = isValidParentheses(line) === true ? 'yes' : 'no';
    console.log(result);
    readline.close();
  });
  