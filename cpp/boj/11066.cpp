/* 파일 합치기

파일을 합칠 때 필요한 비용(시간 등)이 두 파일 크기의 합이라고 가정할 때, 
최종적인 한 개의 파일을 완성하는데 필요한 비용의 최소합을 계산하시오.

[입력]
프로그램은 표준 입력에서 입력 데이터를 받는다. 
프로그램의 입력은 T개의 테스트 데이터로 이루어져 있는데, 
T는 입력의 맨 첫 줄에 주어진다.
각 테스트 데이터는 두 개의 행으로 주어지는데, 
첫 행에는 소설을 구성하는 장의 수를 나타내는 양의 정수 K (3 ≤ K ≤ 500)가 주어진다. 
두 번째 행에는 1장부터 K장까지 수록한 
파일의 크기를 나타내는 양의 정수 K개가 주어진다. 
파일의 크기는 10,000을 초과하지 않는다.

[출력]
프로그램은 표준 출력에 출력한다. 
각 테스트 데이터마다 정확히 한 행에 출력하는데, 
모든 장을 합치는데 필요한 최소비용을 출력한다.
*/
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;

const int INTMAX = 9876543210;

int T, K, cost[501];
int cache[501][501];
int sum[501];

int sumFIle(int i, int j)
{
    if (i == j)
        return 0;
    int ret = INTMAX;
    for (int k = i; k < j; k++)
    {
        ret = min(ret, cache[i][k] + cache[k + 1][j] + sum[j] - sum[i - 1]);
    }
    return ret;
}

int main(void)
{
    cin >> T;
    while (T--)
    {
        memset(cost, 0, sizeof(cost));
        memset(cache, -1, sizeof(cache));
        cin >> K;
        for (int i = 1; i <= K; i++)
        {
            cin >> cost[i];
            sum[i] = sum[i - 1] + cost[i];
        }

        for (int i = 0; i <= K; i++)
        {
            for (int j = 0; i + j <= K; j++)
                cache[j][i + j] = sumFIle(j, i + j);
        }
        cout << cache[1][K] << endl;
    }
    return 0;
}

// 참고 풀이: https://deque.tistory.com/14