/**
* @param {string[]} s1 - 원소는 중복되지 않습니다.
* @param {string[]} s2 - 원소는 중복되지 않습니다.
* @return {number} s1과 s2에서 같은 원소의 개수가 반환됩니다.
* @description
*  for loop, indexOf(), includes() 등 또한 
* 어차피 최악의 경우 전체를 탐색하여 시간 복잡도가 동일합니다.
* 그래서 이번엔 고차 함수를 이용해 가장 간략히 풀 수 있는 풀이법으로 풀어보았습니다.
*/
function solution(s1, s2) {
    return s1.filter((str1) => s2.includes(str1)).length;
}