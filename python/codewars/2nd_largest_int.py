"""Find the 2nd largest integer in array

CODEWARS
URL: https://www.codewars.com/kata/find-the-2nd-largest-integer-in-array/train/python

Find the 2nd largest integer in array If the array has no 2nd largest integer 
then return nil. 
Reject all non integers elements and then find the 2nd largest integer in array

find_2nd_largest([1,2,3]) => 2

find_2nd_largest([1,1,1,1,1]) => nil because all elements are same.
 Largest no. is 1. and there is no 2nd largest no.

find_2nd_largest([1,'a','2',3,3,4,5,'b']) => 4 
as after rejecting non integers array will be [1,3,3,4,5] Largest no. is 5. 
and 2nd largest is 4.

Return nil if there is no 2nd largest integer. Take care of big numbers as well
"""

def find_2nd_largest(arr):
    integers = [n for n in filter(lambda x: type(x) == int, arr)]
    if not integers:
        return None
    first = second = min(integers)
    for num in integers:
        if num > first:
            first, second = num, first
        elif num > second and num < first:
            second = num
    return None if first == second else second

print(find_2nd_largest([1,'a','2',3,3,3333333333333333333334,544444444444444444444444444444,'b']))
print(find_2nd_largest([1,1,1,1,1,1,1]))
print(find_2nd_largest([]))
print(find_2nd_largest([2, 2, 1, 1, 1]))
print(find_2nd_largest(['W', '0', 9621123, '6', 's', '6', 'T', 2692566, 2255915, 'f', 'F', 'g', 'N', 4434094, 'R', 3279672, 8920528, 'm', '4', 'H', 'G', 7187112, 2585741, '3', 7334297, 5074523, 'D', 'l', 'T', 8664443, 'V', 'h', 'q', 3658104, 'I', 1688686, 46386, 559889, 'K', 1003623, 9445282, 'X', 6544587, 7676706, 'D', 794262, 599551, 'f', 'K', 7756091, 6171023, 9121865, 4962119, 'V', 9282162, 8788652, 4675550, 9097899, 2035405, 6595249, 1444974, 't', 3300231, 1463828, '2', '3', 'Z', 248772, 'H', 'Q', 3259066, 4074869, '9', 'M', 'd', 'a', 3621501, 6584967, 6378579, 'Q']))