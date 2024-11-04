# массив с суммой элементов массива
def x(nums):
    prefixsum = [0]*(len(nums) + 1)
    for i in range (1, len(nums) + 1): 
        prefixsum[i] = prefixsum[i - 1] + nums[i - 1]
    return prefixsum

# сумма элементов в диапазоне
def rsq(prefixsum, l, r):
    return prefixsum[r] - prefixsum[l]

# массив с подсчётом нулей в массиве
def makeprefixzeroes(nums):
    prefixzeroes = [0]*(len(nums) + 1)
    for i in range (1, len(nums) + 1):
        if nums[i - 1] ==  0:
            prefixzeroes[i] = prefixzeroes[i-1] + 1
        else:
            prefixzeroes[i] = prefixzeroes[i - 1]
    return prefixzeroes

# подсчёт нулей в диапазоне
def countzeroes(prefixzeroes, l, r ):
    return prefixzeroes[r] - prefixzeroes[l]

""" zeroes = makeprefixzeroes([1, 0, 5, 0, 2])
print(countzeroes(zeroes, 0, 4))

sum = makeprefixsum([1, 2, 3, 4, 5, 0, 7])
print(sum)
print(rsq(sum, 2, 5)) """


def countprefixsums(nums): 
    prefixsumbyvalue = {0: 1}
    nowsum = 0
    for now in nums:
        nowsum += now
        if nowsum not in prefixsumbyvalue:
            prefixsumbyvalue[nowsum] = 0
        prefixsumbyvalue[nowsum] +=1
    return prefixsumbyvalue

def countzerosumranges(prefixsumbyvalue):
    cntranges = 0
    for nowsum in prefixsumbyvalue:
        cntsum = prefixsumbyvalue[nowsum]
        cntranges += cntsum*(cntsum - 1)//2
    return cntranges

""" prefixsum = countprefixsums([1, 2, -3, 4, -2, 1, -3, 0])
print(countzerosumranges(prefixsum))
print(countzerosumranges(countzerosumranges(prefixsum))) """