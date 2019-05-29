/* LCS
BOJ no. 9251
URL: https://www.acmicpc.net/problem/9251

LCS(Longest Common Subsequence, 최장 공통 부분 수열)문제는 
두 수열이 주어졌을 때, 
모두의 부분 수열이 되는 수열 중 가장 긴 것을 찾는 문제이다.

예를 들어, ACAYKP와 CAPCAK의 LCS는 ACAK가 된다.

[입력]
첫째 줄과 둘째 줄에 두 문자열이 주어진다. 문자열은 알파벳 대문자로만 이루어져 있으며, 최대 1000글자로 이루어져 있다.

[출력]
첫째 줄에 입력으로 주어진 두 문자열의 LCS의 길이를 출력한다.
*/

#include <iostream>
#include <algorithm>
#include <string>
#include <cstring>
using namespace std;

int cache[1001][1001];
char A[1001], B[1001];

int lcs(char A[], char B[])
{
    int a_size = strlen(A);
    int b_size = strlen(B);

    // Add padding of 0 to the left
    for (int i = 0; i <= a_size; i++)
        cache[i][0] = 0;
    for (int j = 0; j <= b_size; j++)
        cache[0][j] = 0;

    for (int i = 0; i < a_size; i++)
    {
        for (int j = 0; j < b_size; j++)
        {
            if (A[i] == B[j])
                cache[i + 1][j + 1] = cache[i][j] + 1;
            else
                cache[i + 1][j + 1] = max(cache[i + 1][j], cache[i][j + 1]);
        }
    }
    return cache[a_size][b_size];
}

int main(void)
{
    memset(cache, -1, sizeof(cache));
    cin >> A >> B;
    cout << lcs(A, B) << endl;

    return 0;
}