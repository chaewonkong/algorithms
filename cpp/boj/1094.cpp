/* 막대기

지민이는 길이가 64cm인 막대를 가지고 있다. 
어느 날, 그는 길이가 Xcm인 막대가 가지고 싶어졌다. 
지민이는 원래 가지고 있던 막대를 더 작은 막대로 자른다음에, 
풀로 붙여서 길이가 Xcm인 막대를 만들려고 한다.

지민이가 가지고 있는 막대의 길이를 모두 더한다. 
처음에는 64cm 막대 하나만 가지고 있다. 이때, 합이 X보다 크다면, 
아래와 같은 과정을 반복한다.
    1. 가지고 있는 막대 중 길이가 가장 짧은 것을 절반으로 자른다.
    2. 만약, 위에서 자른 막대의 절반 중 하나를 버리고 
    남아있는 막대의 길이의 합이 X보다 크거나 같다면, 
    위에서 자른 막대의 절반 중 하나를 버린다.
이제, 남아있는 모든 막대를 풀로 붙여서 Xcm를 만든다.

X가 주어졌을 때, 위의 과정을 거친다면, 
몇 개의 막대를 풀로 붙여서 Xcm를 만들 수 있는지 구하는 프로그램을 작성하시오. 

[입력]
첫째 줄에 X가 주어진다. X는 64보다 작거나 같은 자연수이다.

[출력]
문제의 과정을 거친다면, 몇 개의 막대를 풀로 붙여서 Xcm를 만들 수 있는지 출력한다.
*/

#include <iostream>
#include <cstring>
using namespace std;

int N = 64;
int sticks[65];
int target;

int calc(int target)
{
    int cnt = 0;
    int i = 0;
    int min_len = N;
    int len = N;

    sticks[0] = len;

    while (len - target)
    {
        min_len /= 2;
        sticks[i] = min_len;
        if (len - min_len >= target)
            len -= min_len;
        else
        {
            sticks[i + 1] = min_len;
            i += 1;
        }
    }

    for (int j = 0; j <= N; j++)
        if (sticks[j])
            cnt += 1;

    return cnt;
}

int main(void)
{
    memset(sticks, 0, sizeof(sticks));
    cin >> target;
    cout << calc(target) << endl;
    return 0;
}