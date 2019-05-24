/* Triangle Path

ID: TRIANGLEPATH
URL:

6
1  2
3  7  4
9  4  1  7
2  7  5  9  4

위 형태와 같이 삼각형 모양으로 배치된 자연수들이 있습니다. 
맨 위의 숫자에서 시작해, 
한 번에 한 칸씩 아래로 내려가 맨 아래 줄로 내려가는 경로를 만들려고 합니다. 
경로는 아래 줄로 내려갈 때마다 바로 아래 숫자, 
혹은 오른쪽 아래 숫자로 내려갈 수 있습니다. 
이 때 모든 경로 중 포함된 숫자의 최대 합을 찾는 프로그램을 작성하세요.

[입력]
입력의 첫 줄에는 테스트 케이스의 수 C(C <= 50)가 주어집니다. 
각 테스트 케이스의 첫 줄에는 삼각형의 크기 n(2 <= n <= 100)이 주어지고, 
그 후 n줄에는 각 1개~n개의 숫자로 삼각형 각 가로줄에 있는 숫자가 왼쪽부터 주어집니다. 
각 숫자는 1 이상 100000 이하의 자연수입니다.

[출력]
각 테스트 케이스마다 한 줄에 최대 경로의 숫자 합을 출력합니다.
*/
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

int n, triangle[100][100];
int cache[100][100];

int path(int row, int col)
{
    if (row == n - 1)
        return triangle[row][col];

    int &ret = cache[row][col];
    if (ret != -1)
        return ret;
    return ret = max(path(row + 1, col), path(row + 1, col + 1)) + triangle[row][col];
}

int main(void)
{
    int test_case;
    cin >> test_case;
    if (test_case < 0 || test_case > 50)
        exit(-1);

    for (int t = 0; t < test_case; t++)
    {
        memset(cache, -1, sizeof(cache));
        cin >> n;

        if (n < 2 || n > 100)
            exit(-1);

        for (int i = 0; i < n; i++)
            for (int j = 0; j <= i; j++)
            {
                cin >> triangle[i][j];
                if (triangle[i][j] < 1 || triangle[i][j] > 100000)
                    exit(-1);
            }
        cout << path(0, 0) << endl
             << endl;
    }
    return 0;
}