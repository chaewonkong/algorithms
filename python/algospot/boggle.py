"""Boggle Game from Algospot

ID: BOGGLE
URL: https://algospot.com/judge/problem/read/BOGGLE

보글(Boggle) 게임은 그림 (a)와 같은 5x5 크기의 알파벳 격자인 
게임판의 한 글자에서 시작해서 펜을 움직이면서 만나는 글자를 
그 순서대로 나열하여 만들어지는 영어 단어를 찾아내는 게임입니다. 
펜은 상하좌우, 혹은 대각선으로 인접한 칸으로 이동할 수 있으며 
글자를 건너뛸 수는 없습니다. 
지나간 글자를 다시 지나가는 것은 가능하지만, 
펜을 이동하지않고 같은 글자를 여러번 쓸 수는 없습니다.

보글 게임판과 알고 있는 단어들의 목록이 주어질 때, 보글 게임판에서 각 단어를 찾을 수 있는지 여부를 출력하는 프로그램을 작성하세요.

[입력]
입력의 첫 줄에는 테스트 케이스의 수 C(C <= 50)가 주어집니다. 
각 테스트 케이스의 첫 줄에는 각 5줄에 5글자로 보글 게임판이 주어집니다. 
게임판의 모든 칸은 알파벳 대문자입니다.
그 다음 줄에는 우리가 알고 있는 단어의 수 N(1 <= N <= 10)이 주어집니다. 
그 후 N줄에는 한 줄에 하나씩 우리가 알고 있는 단어들이 주어집니다. 
각 단어는 알파벳 대문자 1글자 이상 10글자 이하로 구성됩니다.

[출력]
각 테스트 케이스마다 N줄을 출력합니다. 
각 줄에는 알고 있는 단어를 입력에 주어진 순서대로 출력하고, 
해당 단어를 찾을 수 있을 경우 YES, 아닐 경우 NO를 출력합니다.

[예제입력]
1
URLPM
XPRET
GIAET
XTNZY
XOQRS
6
PRETTY
GIRL
REPEAT
KARA
PANDORA
GIAZAPX

[예제출력]
PRETTY YES
GIRL YES
REPEAT YES
KARA NO
PANDORA NO
GIAZAPX YES
"""

# Simpler Version

def boggle(case, word):
    """boggle game"""

    direction_x = [-1, -1, -1, 1, 1, 1, 0, 0]
    direction_y = [-1, 0, 1, -1, 0, 1, -1, 1]

    def has_word(y, x, word):
        """Return True if word could be found in 5*5 test case,
        or return False"""

        if x not in range(5) or y not in range(5):
            return False
        if case[y][x] != word[0]:
            return False
        if len(word) == 1:
            return True
        for d in range(8):
            next_x, next_y = x +direction_x[d], y + direction_y[d]
            if has_word(next_y, next_x, word[1:]):
                return True
        return False
    
    for i in range(5):
        for j in range(5):
            if has_word(i, j, word):
                return True
    
    return False


    
# Test for Test Cases
if __name__ == "__main__":
    test_arr = [
        ["U", 'R', 'L', 'P', 'M'],
        ['X','P','R','E','T'],
        ['G','I','A','E','T'],
        ['X','T','N','Z','Y'],
        ['X','O','Q','R','S']
    ]
    word_arr = ['PRETTY', "GIRL", "REPEAT", "KARA", "PANDORA", "GIAZAPX"]
    ans = [True, True, True, False, False, True]

    for i in range(len(word_arr)):
        if boggle(test_arr, word_arr[i]) != ans[i]:
            print(False)
    print(True)
