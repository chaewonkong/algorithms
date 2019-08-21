"""2*n 타일링

"""


def solution(n):
    dp = [0] * (n+1)

    for i in range(1, n+1):
        if i == 1:
            dp[i] = 1
        elif i == 2:
            dp[i] = 2
        else:
            dp[i] = dp[i-1] + dp[i-2]

    return dp[n] % 10007


if __name__ == "__main__":
    n = int(input())
    print(solution(n))
