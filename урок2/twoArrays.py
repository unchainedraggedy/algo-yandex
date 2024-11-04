def merge(nums1, nums2):
    merged = [0]*(len(nums1)+len(nums2))
    first1 = first2 = 0
    for k in range(len(nums1) + len(nums2)):
        if first1 != len(nums1) and (first2 == len(nums2) or nums1[first1] <= nums2[first2]):
            merged[k] = nums1[first1]
            first1 += 1
        else: 
            merged[k] = nums2[first2]
            first2 += 1
    return merged

print(len(merge([1, 3, 2, 42, 27, 29, 44, 58, 94, 8, 72], [1, 32, 99])))