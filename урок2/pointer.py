# дана отсортированная последовательность чисел N и число  K
# найти количество пар A, B, чтоб B - A > K

def cntrpairswithdiffgtk(sortednums, k):
    cntpairs = 0
    last = 0
    for first in range(len(sortednums)):
        while last < len(sortednums) and sortednums[last] - sortednums[first] <= k:
            last += 1
        cntpairs += len(sortednums) - last
    return cntpairs

print(cntrpairswithdiffgtk([1, 3, 11, 14, 17, 21, 34, 50], 10))
