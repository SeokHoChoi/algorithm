/**
* @param {number[]} num_list - 숫자 배열
* @return {number[]} 순서가 반전된 num_list
* @description
* Array.prototype.reverse(), 
* Array.prototype.push() 등의 method와 
* 추가적인 count 변수를 사용하지 않고 풀어보았습니다.
*/
function solution(num_list) {
    var answer = [];
    for (let len = num_list.length - 1, i = len; i >= 0; i--) {
        answer[len - i] = num_list[i];
    }
    return answer;
}