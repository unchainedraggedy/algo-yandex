n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
p = list(map(int, input().split()))

sorted_a = []
for i in range(n):
    sorted_a.append((a[i], b[i], i))
sorted_b = sorted_a[:]
sorted_a.sort(reverse=True, key=lambda x: (x[0], x[1], -x[2]))
sorted_b.sort(reverse=True, key=lambda x: (x[1], x[0], -x[2]))
a_pos = b_pos = 0
ans = []
used = set()
for i in range(n):
    if p[i] == 0:
        while sorted_a[a_pos][2] in used:
            a_pos +=1
        algo = sorted-b