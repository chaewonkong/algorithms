#include <iostream>
using namespace std;

int factorial(int n)
{
    int ret = 1;
    for (int i = 1; i <= n; i++)
        ret *= i;
    return ret;
}

int main(void)
{
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}