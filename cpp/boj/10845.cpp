/* 큐
push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 
    만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 
    만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 
    만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

[입력]
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 
둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 
주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 
문제에 나와있지 않은 명령이 주어지는 경우는 없다.

[출력]
출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

*/

#include <iostream>
#include <queue>
using namespace std;

string cmd;
int n, d;

int main(void)
{
    cin >> n;
    queue<int> q;
    while (n--)
    {
        cin >> cmd;
        if (cmd == "push")
        {
            cin >> d;
            q.push(d);
        }
        if (cmd == "pop")
        {
            if (q.size())
            {
                cout << q.front() << endl;
                q.pop();
            }
            else
                cout << -1 << endl;
        }
        if (cmd == "size")
            cout << q.size() << endl;
        if (cmd == "empty")
        {
            if (q.size())
                cout << 0 << endl;
            else
                cout << 1 << endl;
        }
        if (cmd == "front")
        {
            if (q.size())
                cout << q.front() << endl;
            else
                cout << -1 << endl;
        }
        if (cmd == "back")
        {
            if (q.size())
                cout << q.back() << endl;
            else
                cout << -1 << endl;
        }
    }
    return 0;
}