/**
* @param {number} n
* @return {number} n 이하의 짝수들의 합
* @description
* 현재 풀이처럼 Array(n).fill(0) 를 이용하거나 
* '0'.repeat(n).split('')를 이용하여 배열 초기화가 가능합니다.
*/
const solution = (n) => Array(n).fill(0).map((_, index) => index + 1).filter((value) => value % 2 === 0).reduce((acc, cur) => acc + cur, 0)