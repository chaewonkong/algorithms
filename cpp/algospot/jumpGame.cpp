#include <iostream>
#include <string.h>

int n, board[100][100];
int cache[100][100];

int jump(int row, int col)
{
    if (row >= n || col >= n)
        return 0;
    if (row == n - 1 && col == n - 1)
        return 1;
    int jumpSize = board[row][col];
    if (cache[row][col] != -1)
        return cache[row][col];
    return cache[row][col] = jump(row + jumpSize, col) || jump(row, col + jumpSize);
}

int main(void)
{
    memset(cache, -1, sizeof(cache));
}