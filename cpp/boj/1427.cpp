/* 소트인사이드

배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

[입력]
첫째 줄에 정렬하고자하는 수 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다.

[출력]
첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다.
*/
#include <iostream>
#include <vector>
using namespace std;

int n, length;

void swap(int *a, int *b)
{
    int tmp = *a;
    *a = *b;
    *b = tmp;
}

int main(void)
{
    cin >> n;
    vector<int> arr;

    while (n)
    {
        arr.push_back(n % 10);
        n /= 10;
    };
    length = arr.size();

    for (int i = 0; i < length; i++)
        for (int j = i; j < length; j++)
        {
            if (arr[i] < arr[j])
                swap(arr[i], arr[j]);
        }

    for (int i = 0; i < length; i++)
        cout << arr[i];
    cout << endl;
    return 0;
}