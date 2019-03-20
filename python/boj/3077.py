"""임진왜란

Baekjoon No.3077
URL: https://www.acmicpc.net/problem/3077

현우는 방금 선생님으로부터 역사 시험 결과를 받았다. 
현우가 가장 열심히 공부한 문제는 임진왜란의 해전을 일어난 순서대로 적는 문제이다.

올바른 순서는 다음과 같다.

1. 옥포 해전    2. 사천 해전    3. 한산도 대첩    4. 명량 해전    5. 노량 해전

현우는 정말 열심히 공부했고, 옥포 해전을 제외한 모든 해전의 날짜를 외웠다. 
따라서, 현우는 옥포 해전이 가장 먼저 일어난 해전인지 마지막에 일어난 해전인지 생각해내지 못했고, 
다음과 같이 결국 제일 마지막에 적고말았다.

1. 사천 해전    2. 한산도 대첩    3. 명량 해전    4. 노량 해전    5. 옥포 해전

현우가 적은 정답은 모든 위치에서 정답과 일치하지 않는다. 
따라서 5개 해전 중에 4개 해전의 순서를 올바르게 적었지만, 
점수는 5점 만점에 0점이 된다.

현우는 이러한 채점 방식이 큰 문제가 있다고 생각했다.

현우는 선생님께 해전이 일어난 정확한 연도도 중요하지만, 
상대적인 관계가 훨씬 더 중요하다고 말했고, 선생님은 현우의 의견을 받아들여 이 문제를 다시 채점하기로 했다.

선생님이 다시 사용한 채점 방법은 두 해전을 골라 순서가 일치하면 점수를 주는 방법이다. 
즉, 선생님은 학생의 답 중에 N(N-1)/2개의 쌍을 모두 고른뒤, 
올바른 순서로 적혀져 있으면 1점을 주려고 한다. 최종 점수는 획득점수/(N(N-1)/2)가 된다.

문제의 정답과 현우가 작성한 답안이 주어졌을 때, 현우의 점수를 구하는 프로그램을 작성하시오.

[입력]
첫째 줄에 해전의 개수 N이 주어진다. 
(2 ≤ N ≤ 2500) 다음 줄에는 올바른 정답이 공백으로 구분되어 주어진다. 
그 다음 줄에는 현우가 작성한 답안이 공백으로 구분되어 주어진다. 
해전의 이름은 3글자~15글자 알파벳 소문자로 이루어져 있다.

[출력]
현우가 획득한 점수를 a/b로 출력한다. (약분 하면 안된다)

[예제 입력]
5
okpo sacheon hansan myeongnyang noryang
sacheon hansan myeongnyang noryang okpo

[예제 출력]
6/10
"""

def get_total_score(correct, submitted, N):
    """Return total l,,relative score"""

    cache = [0 for _ in range(N)]
    score = 0
    div = N*(N-1)//2

    for i in range(N):
        cache[i] = submitted.index(correct[i])

    def find(picked=[]):
        nonlocal score
        if len(picked) == 2:
            i, j = picked
            score += (cache[i] < cache[j])
            return
        start = picked[-1] + 1 if picked else 0
        for nxt in range(start, N):
            picked.append(nxt)
            find(picked)
            picked.pop()

    find()
                
    return str(score) + "/" + str(div)
    

if __name__ == "__main__":
    N = int(input())
    correct = [ans for ans in input().split(" ")]
    submitted = [ans for ans in input().split(" ")]
    print(get_total_score(correct, submitted, N))



