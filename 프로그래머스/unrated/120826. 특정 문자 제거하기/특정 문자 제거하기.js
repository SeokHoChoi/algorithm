/**
* @param {string} my_string - 대소문자가 구분되는 문자열
* @param {string} letter - my_string에서 제거할 특정 문자
* @return {string} 특정 문자가 제거된 문자열
* @description 
* 정규식용 교체패턴과 String.prototype.replace() 메서드를 이용하거나, 
* String.prototype.split() 와 정규식용 교체패턴을 이용해 배열로 변환 후 
* Array.prototype.join() 을 이용하여 풀이를 할 수도 있습니다.
*/
function solution(my_string, letter) {
    let answer = '';
    for (let i = 0; i < my_string.length; i++) {
        const myChar = my_string[i];
        if (myChar === letter) {
            continue;
        }
        
        answer += myChar;
    }
    
    return answer;
}