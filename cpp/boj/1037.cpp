/* 약수
양수 A가 N의 진짜 약수가 되려면, N이 A의 배수이고, A가 1과 N이 아니어야 한다. 
어떤 수 N의 진짜 약수가 모두 주어질 때, N을 구하는 프로그램을 작성하시오.

[입력]
첫째 줄에 N의 진짜 약수의 개수가 주어진다. 
이 개수는 50보다 작거나 같은 자연수이다. 
둘째 줄에는 N의 진짜 약수가 주어진다. 
1,000,000보다 작거나 같고, 2보다 크거나 같은 자연수이고, 중복되지 않는다.

[출력]
첫째 줄에 N을 출력한다. N은 항상 32비트 부호있는 정수로 표현할 수 있다.
*/

#include <iostream>
#include <vector>
using namespace std;

int cnt, tmp, len;
vector<int> arr;

void swap(int *a, int *b)
{
    int tmp = *a;
    *b = *a;
    *a = tmp;
}

int main(void)
{
    cin >> cnt;
    while (cnt--)
    {
        cin >> tmp;
        arr.push_back(tmp);
    }

    len = arr.size();
    for (int i = 0; i < len; i++)
        for (int j = i + 1; j < len; j++)
            if (arr[i] > arr[j])
                swap(arr[i], arr[j]);

    cout << arr.front() * arr.back() << endl;
    return 0;
}