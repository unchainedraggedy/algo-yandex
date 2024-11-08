n, k = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()
ans = 0
left, right = 0, 0
while left < n and right < n:
    if arr[right] - arr[left] <= k:
        ans = max(ans, right - left + 1)
        right += 1
    else:
        left += 1
print(ans)