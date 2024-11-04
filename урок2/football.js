function bestTeamSum(players) {
    let bestSum = 0;
    let nowSum = 0;
    let last = 0;

    for (let first = 0; first < players.length; first++) {
        while (last < players.length && (last === first || players[first] + players[first + 1] >= players[last])) {
            nowSum += players[last];
            last++;
        }
        bestSum = Math.max(bestSum, nowSum);
        nowSum -= players[first];
    }

    return bestSum;
}

console.log(bestTeamSum([1, 2, 3, 5, 6, 8, 9]));
