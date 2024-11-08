n = int(input())
arr = list(map(int, input().split()))
pref_sums =[0] * (n + 1)
for i in range(1, n + 1):
    pref_sums[i] = pref_sums[i - 1] + arr[i - 1]
suff_sums = [0] * (n + 1)
for i in range(n - 1, -1, -1):
    suff_sums[i] = suff_sums[i + 1] + arr[i]
ans = 0
for i in range(1, n):
    ans += arr[i] * i
now_sum = ans
for now_pos in range(1, n):
    now_sum += pref_sums[now_pos] - suff_sums[now_pos]
    ans = min(ans, now_sum)
print(ans)