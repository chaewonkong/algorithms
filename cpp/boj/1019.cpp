/* 책 페이지

지민이는 N쪽인 책이 한권 있다. 첫 페이지는 1쪽이고, 마지막 페이지는 N쪽이다.
각 숫자가 모두 몇 번이 나오는지 출력하는 프로그램을 작성하시오.

[입력]
첫째 줄에 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다.

[출력]
첫째 줄에 0이 총 몇 번 나오는지, 1이 총 몇 번 나오는지, .
.., 9가 총 몇 번 나오는지를 출력한다.
*/

#include <iostream>
#include <cstring>
using namespace std;

int n, tmp;
int arr[10];

int main(void)
{
    memset(arr, 0, sizeof(arr));
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        tmp = i;
        while (tmp)
        {
            arr[tmp % 10] += 1;
            tmp /= 10;
        }
    }
    for (int i = 0; i < 9; i++)
        cout << arr[i] << " ";
    cout << arr[9] << endl;
    return 0;
}
