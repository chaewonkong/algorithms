"""1로 만들기

정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
2. X가 2로 나누어 떨어지면, 2로 나눈다.
3. 1을 뺀다.

정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 
연산을 사용하는 횟수의 최솟값을 출력하시오.

[입력]
첫째 줄에 1보다 크거나 같고, 10**6보다 작거나 같은 정수 N이 주어진다.

[출력]
첫째 줄에 연산을 하는 횟수의 최솟값을 출력한다.

[예제 입력]
10

[예제 출력]
3
"""

import sys
sys.setrecursionlimit(10 ** 7)


def minimum_calc(n):
    cache = [0 for _ in range(n+1)]

    def calc(n):
        # 기저사례
        if n == 1:
            cache[n] = 0
            return 0
        elif n == 2 or n == 3:
            cache[n] = 1
            return 1
        elif cache[n] != 0:
            return cache[n]
        # 재귀호출
        else:
            if n % 6 == 0:
                cache[n] = min(calc(n//2), calc(n//3), calc(n-1)) +1
                return cache[n]
            elif n % 2 == 0:
                cache[n] = min(calc(n//2), calc(n-1)) +1
                return cache[n]
            elif n % 3 == 0:
                cache[n] = min(calc(n//3), calc(n-1)) +1
                return cache[n]
            else:
                cache[n] = calc(n-1) + 1
                return cache[n]
    
    calc(n)
    return cache[n]        


if __name__ == "__main__":
    n = int(input())
    print(minimum_calc(n))