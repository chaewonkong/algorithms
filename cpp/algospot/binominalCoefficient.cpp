#include <iostream>
#include <string.h>

// int bino(int n, int r)
// {
//     if (r == 0 || n == r)
//         return 1;
//     return bino(n - 1, r - 1) + bino(n - 1, r);
// }

// Binominal Coefficient with Memoization

int cache[30][30];

int bino(int n, int r)
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
    std::cin >> n >> r;
    std::cout << bino(n, r) << std::endl;
    return 0;
}