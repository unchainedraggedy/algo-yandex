
function merge(nums1, nums2) {
    const merged = new Array(nums1.length + nums2.length);
    let first1 = 0, first2 = 0;

    for (let k = 0; k < merged.length; k++) {
        if (first1 !== nums1.length && (first2 === nums2.length || nums1[first1] <= nums2[first2])) {
            merged[k] = nums1[first1];
            first1++;
        } else {
            merged[k] = nums2[first2];
            first2++;
        }
    }

    return merged;
}
