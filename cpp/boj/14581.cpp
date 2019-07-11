/*팬들에게 둘러싸인 홍준

https://www.acmicpc.net/problem/14581
 */

#include <iostream>
#include <string>
using namespace std;

string identifier;

int main(void) {
  cin >> identifier;
  cout << ":fan::fan::fan:"
       << "\n";
  cout << ":fan::" << identifier << "::fan:"
       << "\n";
  cout << ":fan::fan::fan:" << endl;

  return 0;
}
