"""수 정렬하기 3

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

[입력]
첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 숫자가 주어진다. 
이 수는 10,000보다 작거나 같은 자연수이다.

[출력]
첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
"""


import sys
N = 10000

def counting_sort(T):
    cache = [0] * (N+1)
    for _ in range(T):
        num = int(sys.stdin.readline().rstrip())
        cache[num] += 1   
    return cache


if __name__ == "__main__":
    T = int(sys.stdin.readline().rstrip())
    cache = counting_sort(T)
    for i in range(N):
        for _ in range(cache[i]):
            sys.stdout.write(str(i) + '\n')
    