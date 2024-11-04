const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  readline.on('line', (line) => {
    input.push(line);
    if(input.length === 2){
        readline.close()
    }

    }).on('close', () => {
    const [n, k] = input[0].split(' ').map(Number);
    const s = input[1];
    let d = {};
    let l = 0, r = 0, bestl = 0, bestr = 0;
  
    while (r < n) {
      if ((d[s[r]] || 0) < k) {
        if (r - l > bestr - bestl) {
          bestr = r;
          bestl = l;
        }
        d[s[r]] = (d[s[r]] || 0) + 1;
        r++;
      } else {
        while (l < n && (d[s[r]] || 0) >= k) {
          d[s[l]] -= 1;
          l++;
        }
      }
    }
  
    console.log(bestr - bestl + 1, bestl + 1);
  });
  