/**
* @param {string[]} s1 - 원소는 중복되지 않습니다.
* @param {string[]} s2 - 원소는 중복되지 않습니다.
* @return {number} s1과 s2에서 같은 원소의 개수가 반환됩니다.
* @description
*  for loop, indexOf(), includes() 등 또한 
* 어차피 최악의 경우 전체를 탐색하여 시간 복잡도가 동일합니다.
* 그래서 이번엔 고차 함수를 이용해 가장 간략히 풀 수 있는 풀이법으로 풀어보았습니다.
* 다른 풀이법으로 두 배열을 이어 붙인 후 new Set()을 이용하여 중복을 제거하여 
* 다시 배열로 변환 후 길이의 차를 이용하는 방법 또한 있으나 
* 이 또한 시간제한에서 크게 이점을 얻진 못합니다. 
* 참고로 배열 변환 시에는 Array.from()과 Array().fill() 을 이용할 수 있습니다. 
* 리트 코드 채점 사이트에서 확인 결과 Array.from({length: n}, () => 0)과 
* Array(n).fill(0) 비교 채점 시 
* Array(n).fill(0)이 훨씬 좋은 성능으로 나타납니다.
*/
function solution(s1, s2) {
    return s1.filter((str1) => s2.includes(str1)).length;
}