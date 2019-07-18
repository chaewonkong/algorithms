/*오늘의 날짜는? */

#include <time.h>
#include <iostream>
#include <string>
using namespace std;

string y, m, d;

int main(void) {
  time_t cur;
  cur = time(NULL);

  struct tm *now;
  now = gmtime(&cur);

  // Get Year, Month, Day
  y = to_string(1900 + now->tm_year);
  m = to_string(1 + now->tm_mon);
  d = to_string(now->tm_mday);

  // Add '0' When Only 1 digit
  if (m.length() < 2) {
    m = '0' + m;
  }
  if (d.length() < 2) {
    d = '0' + d;
  }

  // Print
  cout << y << '\n' << m << '\n' << d << endl;

  return 0;
}