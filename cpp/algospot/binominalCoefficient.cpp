#include <iostream>
#include <cstring>
using namespace std;

long long int cache[30][30];

long long int bino(int n, int r)
{
    if (r == 0 || n == r)
        return 1;
    if (cache[n][r] != -1)
        return cache[n][r];
    return cache[n][r] = bino(n - 1, r - 1) + bino(n - 1, r);
}

int main(void)
{
    memset(cache, -1, sizeof(cache));

    int n, r;
    cin >> n >> r;
    cout << bino(n, r) << endl;
    return 0;
}