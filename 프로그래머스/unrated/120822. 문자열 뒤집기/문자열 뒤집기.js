/**
*
* @param {string} my_string
* @return {string} my_string이 거꾸로 뒤집힌 문자열
*/
function solution(my_string) {
    return Array.from(my_string).reverse().join('');
}