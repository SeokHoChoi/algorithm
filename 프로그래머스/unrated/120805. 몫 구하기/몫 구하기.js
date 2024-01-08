/**
* @param {number} num1 
* @param {number} num2 
* @return {number}
* @description 
* Math.floor(내림)를 쓸 수도 있지만 알고리즘 풀이에서는 부정 연산자를 활용해도 좋습니다.
* ex) ~~5.1 => 5로 변환,
* 즉, 결론은 ~n -> -(n + 1)
* ~~ 두 번 사용하면 다시 원상복귀 됩니다.
*/
function solution(num1, num2) {
    var answer = 0;
    answer = ~~(num1 / num2)
    return answer;
}