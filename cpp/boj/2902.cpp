/* KMP는 왜 KMP일까?

긴 형태의 알고리즘 이름이 주어졌을 때, 이를 짧은 형태로 바꾸어 출력하는 프로그램을 작성하시오.

[입력]
입력은 한 줄로 이루어져 있고, 최대 100글자의 영어 알파벳 대문자, 
소문자, 그리고 하이픈 ('-', 아스키코드 45)로만 이루어져 있다. 
첫 번째 글자는 항상 대문자이다. 그리고, 하이픈 뒤에는 반드시 대문자이다. 
그 외의 모든 문자는 모두 소문자이다.

[출력]
첫 줄에 짧은 형태 이름을 출력한다.
*/

#include <iostream>
#include <string>
#include <cctype>
using namespace std;

string inputStr, retStr;

int main(void)
{
    cin >> inputStr;
    for (int i = 0; i < inputStr.length(); i++)
        if (isupper(inputStr[i]))
            retStr += inputStr[i];
    cout << retStr << endl;
    return 0;
}
