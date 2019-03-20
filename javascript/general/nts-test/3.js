/*

다음과 같은 암호 알고리즘을 이용해서 원문 plain_text를 암호화해서 encrypted_text를 만들었습니다.

암호화시킬 문장 plain_text와 같은 길이의 문자열 key를 준비합니다.
암호화시킬 문장을 key를 이용해서 암호화시킵니다.
2번 결과로 나온 문장을 rotation 만큼 회전시켜 줍니다.
예를 들어서 암호화시킬 문장이 hellopython 이고, key가 abcdefghijk, rotation이 3이라고 하겠습니다.
먼저 암호화시킬 문장과 key를 이용해 다음과 같이 암호화해줍니다.

key에 있는 소문자 'a' ~ 'z' 는 각각 순서대로 1~26 까지의 숫자를 의미합니다.
plain_text의 각 알파벳을 key의 대응되는 위치에 있는 소문자가 나타내는 숫자만큼 뒤쪽에 나타나는 알파벳으로 바꿉니다.
예를 들어, plain_text의 'e'에 대응되는 key의 알파벳이 'b'라면, 'e'에서 2만큼 뒤에 있는 알파벳 'g'로 바꾸면 됩니다.
이때 'z'를 넘어가는 문자는 다시 'a'부터 시작합니다. (xyz을 dbc로 암호화시키면 결과는 bac입니다)
위 방식대로 hellopython을 abcdefghijk을 이용해 암호화시키면 다음과 같이 igoptvfbqyy로 암호화됩니다.

'h' + 'a' = 'i' ('h'에서 1만큼 뒤에 있는 알파벳은 'i')
'e' + 'b' = 'g' ('e'에서 2만큼 뒤에 있는 알파벳은 'g')
...
'y' + 'g' = 'f' ('y'에서 7만큼 뒤에 있는 알파벳은 'f', 'z'를 넘어가므로 다시 'a' 부터 시작)
...
'n' + 'k' = 'y' ('n'에서 11만큼 뒤에 있는 알파벳은 'y')
문자를 바꾼 후에는 다음과 같이 rotaion의 수치만큼 문자열을 회전시켜 줍니다. rotation값이 양수면 오른쪽으로, 
음수인 경우는 왼쪽으로 회전을 시켜 줍니다.

0 : igoptvfbqyy
1 : yigoptvfbqy
2 : yyigoptvfbq
3 : qyyigoptvfb
위와 같은 알고리즘으로 암호화된 문장 encrypted_text, 암호화에 사용된 key, 와rotation이 매개변수로 주어질 때, 
암호화를 하기 이전의 문장을 구해 return 하는 solution 함수를 완성해주세요.

제한사항
암호화된 문장 encrypted_text 의 길이는 1 이상 1,000 이하입니다.
암호화된 문장 encrypted_text와 암호화되기 전 문장은 알파벳 소문자로만 구성되어 있습니다.
암호화에 사용되는 문장 key의 길이는 encrypted_text의 길이와 같으며, 알파벳 소문자로만 구성되어 있습니다.
회전횟수 rotation은 -1,000 이상 1,000 이하의 정수입니다.
입출력 예
encrypted_text	key	rotation	result
qyyigoptvfb	abcdefghijk	3	hellopython
*/

function solution(encrypted_text, key, rotation) {
  let temp = [];
  for (let l of encrypted_text) temp.push(l);
  let ret = "";

  // resolve rotation
  if (rotation < 0) {
    temp = temp.splice(temp.length + rotation, -rotation).concat(temp);
  } else if (rotation > 0) {
    temp = temp.splice(rotation).concat(temp);
  } //rotaion ===0인 경우엔 연산 필요 없음

  // resolve key
  for (let i = 0; i < temp.length; i++) temp[i] = temp[i].charCodeAt();
  const num_key = [];
  for (let c of key) num_key.push(c.charCodeAt() - 96);
  for (let j = 0; j < temp.length; j++) {
    if (temp[j] - num_key[j] < 96)
      temp[j] = String.fromCharCode(26 + temp[j] - num_key[j]);
    else temp[j] = String.fromCharCode(temp[j] - num_key[j]);
  }
  for (item of temp) ret += item;
  return ret;
}

// console.log(solution("cdeab", "aaaaa", 3));
console.log(solution("qyyigoptvfb", "abcdefghijk", 3));
