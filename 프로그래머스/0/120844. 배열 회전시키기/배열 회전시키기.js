/**
* @param {Array<number>} numbers - 회전될 배열
* @param {string} direction - 회전될 방향
* @return {Array<number>} - 회전된 배열
*/
function solution(numbers, direction) {
    return direction === 'right' 
        ? [numbers.pop(), ...numbers] 
        : [...numbers.slice(1), numbers.shift()]
}