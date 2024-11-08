function minSlidingWindow(nums, k, n) {
    const result = [];
    const deque = [];
  
    for (let i = 0; i < n; i += 1) {
      if (deque.length && deque[0] < i - k + 1) {
        deque.shift();
      }
  
      while (deque.length && nums[deque[deque.length - 1]] >= nums[i]) {
        deque.pop();
      }
  
      deque.push(i);
  
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
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
    const [n, k] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number).slice(0, n);
    const result = minSlidingWindow(arr, k, n).join('\n');
    console.log(result);
  });
  