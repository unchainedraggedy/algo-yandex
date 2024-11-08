n = int(input())
arr = list(map(int, input().split()))
arr.sort()
ans = []
left = n // 2 - 1
right = n // 2
while len(ans) < n:
    if(n - len(ans)) % 2 == 1:
        ans.append(arr[right])
        right += 1
    else:
        ans.append(arr[left])
        left -= 1
    print(*ans)