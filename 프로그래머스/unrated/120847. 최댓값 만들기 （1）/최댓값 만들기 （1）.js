/**
* 숫자 배열의 원소 중 두 개를 곱하여 나올 수 있는 수중에서 가장 큰 수를 반환합니다.
* @param {number[]} numbers 
* @description
* Array.prototype.sort() 메서드를 통한다면 간단히 풀 수 있지만 
* 정렬되지 않은 상태에서도 가장 큰 수와 그 다음번째 수를 찾는 코드를 작성해 보고 싶었습니다.
*/
function solution(numbers) {
    let f = 0;
    let s = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (f < number) {
            s = f;
            f = number;
            continue;
        } 
        
        if (s < number) {
            s = number;
        }
    }
    
    return f * s;
}